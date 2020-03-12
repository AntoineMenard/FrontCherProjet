import {
  Component, OnInit, ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  toDate,
  parseISO
} from 'date-fns';
import { Subject, from } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { Etape } from '../model/Etape';
import { MatDialog } from '@angular/material/dialog';
import { ModifEtapeComponent } from '../modif-etape/modif-etape.component';


const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  constructor(
    private http: HttpClient,
    public myService: CherserviceService,
    private modal: NgbModal,
    private dialog: MatDialog
  ) { }

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;
  idProjet = sessionStorage.getItem('idProjetFocus');
  projet;
  participations;
  etapesAjout;
  eventAjout;
  modifEtape;
  etapeNouveau;
  erreur = false;



  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [

  ];

  activeDayIsOpen: boolean = true;

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);

  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
  }


  addEventInit( etape : Etape ): void {
    this.events = [
      ...this.events,
      {
        title: etape.nom,
        start: parseISO(etape.dateDebut.toLocaleString()),
        end: parseISO(etape.dateFin.toLocaleString()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];

  }

  updateEtape(event){
    this.modifEtape.nom = event.title;
    this.modifEtape.dateDebut = event.start;
    this.modifEtape.dateFin = event.end;
    this.modifEtape.projet = this.projet;

    this.http.put(this.myService.lienHttp + 'etapeProjet/' + this.idProjet, this.eventAjout)
    .subscribe(data => {
    }, err => {
      console.log(err);
    });
    this.refresh.next();
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  addEtapeNouveau() {
    if (this.etapeNouveau.dateFin >= this.etapeNouveau.dateDebut) {

    this.http.post(this.myService.lienHttp + 'etapeProjet/', this.etapeNouveau)
    .subscribe(data => {
    }, err => {
      console.log(err);
    });
    window.location.reload();
  } else {
    this.erreur = true;
  }
  }
 

  deleteEtape(etape) {
    console.log(etape.id);
    this.http.delete(this.myService.lienHttp + 'etapeProjet/'+ etape.id)
    .subscribe(data => {
    }, err => {
      console.log(err);
    });
    window.location.reload();
  }

  editEtape(etape) {
    sessionStorage.setItem('modifEtapeId', etape.id);
    const mydial = this.dialog.open(ModifEtapeComponent);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  



ngOnInit(): void {
  this.http.get(this.myService.lienHttp + 'projet/' + this.idProjet)
    .subscribe(data => {
      this.projet = data;
      this.etapeNouveau = new Etape('', startOfDay(new Date()), endOfDay(new Date()), this.projet);
    }, err => {
      console.log(err);
    });
  this.http.get(this.myService.lienHttp + 'participation/projet/' + this.idProjet)
    .subscribe(data => {
      this.participations = data;

    }, err => {
      console.log(err);
    });

  this.http.get(this.myService.lienHttp + 'etapeProjet/projet/' + this.idProjet)
    .subscribe(data => {
      this.etapesAjout = data;
      for (const etape of this.etapesAjout) {
        this.addEventInit(etape);
      }
    }, err => {
      console.log(err);
    });

  

}
}

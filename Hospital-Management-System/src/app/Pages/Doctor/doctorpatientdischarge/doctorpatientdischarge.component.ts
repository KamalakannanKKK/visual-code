import { Component, OnInit } from '@angular/core';
import { DischargedPatients } from 'src/app/Models/discharged-patients.model';
import { DischargedPatientsService } from 'src/app/Services/discharged-patients.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-doctorpatientdischarge',
  templateUrl: './doctorpatientdischarge.component.html',
  styleUrls: ['./doctorpatientdischarge.component.css'],
})
export class DoctorpatientdischargeComponent implements OnInit {
  disP!: DischargedPatients[];

  constructor(private disPServe: DischargedPatientsService) {}

  ngOnInit(): void {
    this.getDiscPatients();
  }

  private getDiscPatients() {
    this.disPServe.registerDishchargedPatientFromRemote().subscribe((data) => {
      this.disP = data;
    });
  }

  public deleteP(d_id: number) {
    this.disPServe.deleteDischargedPatient(d_id).subscribe((data) => {
      console.log(data);
      swal.fire('Sucess', 'Deleted Successfully', 'success');
      this.getDiscPatients();
    });
  }
}

import { LightningElement, track } from 'lwc';



export default class AssignmentOne extends LightningElement {
    @track name = '';
    @track industry = '';
    @track sector = '';
    @track phone = '';


    // pulling values from lightning-inputs
    nameInput(event) {
        this.name = event.target.value;
    }

    industryInput(event) {
        this.industry = event.target.value;
    }

    sectorInput(event) {
        this.sector = event.target.value;
    }

    phoneInput(event) {
        this.phone = event.target.value;
    }





    // get rowIndustry() {
    //     return `${this.industry}`;
    // }

    // get rowSector() {
    //     return `${this.sector}`;
    // }

    // get rowPhone() {
    //     return `${this.phone}`;
    // }

    // get rowName() {
    //     return `${this.name}`
    // }

    @track rowName;
    @track rowIndustry;


    handleSubmit() {
        this.rowName = `${this.name}`;
        this.rowIndustry = `${this.rowIndustry}`;
        this.rowSector = `${this.rowSector}`;
        this.rowPhone = `${this.rowPhone}`;
    }



}
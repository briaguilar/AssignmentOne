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



    @track rowName;
    @track rowIndustry;
    @track rowSector;
    @track rowPhone;


    handleSubmit() {
        this.rowName = `${this.name}`;
        this.rowIndustry = `${this.industry}`;
        this.rowSector = `${this.sector}`;
        this.rowPhone = `${this.phone}`;
    }



}
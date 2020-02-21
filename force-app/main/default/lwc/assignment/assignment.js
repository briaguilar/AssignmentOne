import { LightningElement } from 'lwc';


export default class AssignmentOne extends LightningElement {
    name = '';
    industry = '';
    sector = '';
    phone = '';

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

    get rowName() {
        return `${this.name}`;
    }

    get rowIndustry() {
        return `${this.industry}`;
    }

    get rowSector() {
        return `${this.sector}`;
    }

    get rowPhone() {
        return `${this.phone}`;
    }

    // get rowContent() {
    //     return `${this.name} ${this.industry} ${this.sector} ${this.phone}`;
    // }

}
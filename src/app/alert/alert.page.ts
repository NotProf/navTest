import {Component, OnInit} from '@angular/core';
import {AlertController, LoadingController} from '@ionic/angular';
import {TestService} from '../../Services/test.service';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.page.html',
    styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
    toDo: any;
    id: any;
    constructor(private loadingController: LoadingController,
                private testService: TestService) {
    }

    async ngOnInit() {
        this.toDo = this.testService.toDo;
        this.id = localStorage.getItem('test');
        const loading = await this.loadingController.create({
            message: 'Loading...',
            duration: 4000
        });
        await loading.present();
    }

}

import {Component} from '@angular/core';
import {LoadingController, NavController} from '@ionic/angular';
import {TestService} from '../../Services/test.service';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    id: any;
    name: any;

    constructor(private navController: NavController,
                private loadingController: LoadingController,
                private testService: TestService) {
    }


    async goToAlert() {
        const loading = await this.loadingController.create({
            message: 'Loading...',
        });
        await loading.present();
        this.testService.toDo = await this.testService.getToDoById(this.id, this.name).toPromise();
        console.log(this.testService.toDo);
        localStorage.setItem('test', this.id);
        setTimeout(async () => {
            await loading.dismiss();
            await this.navController.navigateRoot('alert');
        }, 1000);
    }
}

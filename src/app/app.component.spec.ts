import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {RadioButtonModule} from 'primeng/radiobutton';
import {MessageModule} from 'primeng/message';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpClientTestingModule,
                TableModule,
                DialogModule,
                RadioButtonModule,
                MessageModule
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});

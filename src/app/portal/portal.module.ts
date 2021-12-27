import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './home/main/main.component';
import { WorkComponent } from './home/work/work.component';
import { ChooseComponent } from './home/choose/choose.component';
import { UniversitiesComponent } from './home/universities/universities.component';
import { StudentsComponent } from './home/students/students.component';
import { SwiperModule } from 'swiper/angular';
import { FaqComponent } from './home/faq/faq.component';
import { DreamComponent } from './home/dream/dream.component';
import { SearchComponent } from './search/search.component';
import { SearchMainComponent } from './search/search-main/search-main.component';
import { CardComponent } from './common/card/card.component';
import { SliderComponent } from './common/slider/slider.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { SlideComponent } from './university-details/slide/slide.component';
import { SideDetailComponent } from './university-details/side-detail/side-detail.component';
import { DetailsComponent } from './university-details/details/details.component';
import { ApplyUniversityComponent } from './apply-university/apply-university.component';
import { SideBarComponent } from './apply-university/side-bar/side-bar.component';
import { ApplyDetailsComponent } from './apply-university/details/details.component';
import { CongratulationsModalComponent } from './apply-university/congratulations-modal/congratulations-modal.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelpComponent } from './home/help/help.component';
import { HelpModalComponent } from './home/help-modal/help-modal.component';
import { ThanksComponent } from './home/thanks/thanks.component';

@NgModule({
    declarations: [
        StudentsComponent,
        HomeComponent,
        MainComponent,
        WorkComponent,
        ChooseComponent,
        UniversitiesComponent,
        FaqComponent,
        DreamComponent,
        SearchComponent,
        SearchMainComponent,
        CardComponent,
        SliderComponent,
        UniversityDetailsComponent,
        SlideComponent,
        SideDetailComponent,
        DetailsComponent,
        ApplyUniversityComponent,
        SideBarComponent,
        ApplyDetailsComponent,
        CongratulationsModalComponent,
        HelpComponent,
        HelpModalComponent,
        ThanksComponent
    ],
    imports: [
        CommonModule,
        PortalRoutingModule,
        ReactiveFormsModule,
        // FormsModule,
        // ReactiveFormsModule,
        SwiperModule,
        NgxSmartModalModule.forRoot()
    ],
    providers: [NgxSmartModalService],
})
export class PortalModule { }

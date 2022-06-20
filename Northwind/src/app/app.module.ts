import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { SearchComponent } from './components/home-area/search/search.component';
import { FormsModule } from '@angular/forms';
import { GiftCardComponent } from './components/home-area/gift-card/gift-card.component';
import { DiscountComponent } from './components/home-area/discount/discount.component';
import { SaleComponent } from './components/home-area/sale/sale.component';
import { LocationComponent } from './components/home-area/location/location.component';
import { SloganComponent } from './components/home-area/slogan/slogan.component';
import { TipComponent } from './components/home-area/tip/tip.component';
import { SurveyComponent } from './components/home-area/survey/survey.component';
import { ClockComponent } from './components/home-area/clock/clock.component';
import { ColorsService } from './services/colors.service';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductCardComponent } from './components/products-area/product-card/product-card.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { NumToWordPipe } from './pipes/num-to-word.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { WinterDirective } from './directives/winter.directive';
import { TestEnvironmentComponent } from './components/home-area/test-environment/test-environment.component';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        MenuComponent,
        FooterComponent,
        HomeComponent,
        SearchComponent,
        GiftCardComponent,
        DiscountComponent,
        SaleComponent,
        LocationComponent,
        SloganComponent,
        TipComponent,
        SurveyComponent,
        ClockComponent,
        ProductListComponent,
        AboutComponent,
        PageNotFoundComponent,
        ProductDetailsComponent,
        ProductCardComponent,
        AddProductComponent,
        NumToWordPipe,
        HighlightDirective,
        WinterDirective,
        TestEnvironmentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [],
    // providers: [ColorsService],
    bootstrap: [LayoutComponent]
})
export class AppModule { }

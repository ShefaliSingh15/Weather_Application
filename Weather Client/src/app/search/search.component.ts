import { Component,Output,EventEmitter } from '@angular/core';
import {SearchService} from './search.service';


@Component({
	selector: 'search-it',
	templateUrl: './search.component.html',
	providers:[SearchService]
})


export class SearchComponent {
	data:any;
	cityName = '';
 
	@Output() termData = new EventEmitter();
	constructor(private service: SearchService){
		
	}
	searchCity(){    
				this.service.getData(this.cityName).subscribe(data=>
				this.termData.emit(data));
			     console.log(this.data);
			
	}
}



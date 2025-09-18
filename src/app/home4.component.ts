import { Component } from "@angular/core";

@Component({
    selector:'app-home4',
    template: `<div>
    <h3>Component 4</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Sed euismod, nulla a faucibus convallis, sem turpis dictum neque,
      nec vulputate lorem lacus at enim. Integer ultricies,
    justo nec viverra suscipit, sapien lorem blandit magna,
     non tincidunt urna orci sed erat.
     </p>
    </div>`,
    styles:['h3{background-color:red}','p{color:green}'],
    standalone: false
})

export class Home4Component{

}
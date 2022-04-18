"use strict";(self.webpackChunkNGX_YOUI=self.webpackChunkNGX_YOUI||[]).push([[443],{6443:(f,a,i)=>{i.r(a),i.d(a,{GuideModule:()=>v});var l=i(9808),s=i(2268);const d={installPackage:{expanded:!0,examples:[{title:"PC Terminal",code:"npm install ngx-youi --save"}]},importSvgLoaders:{expanded:!0,examples:[{title:"angular.json",code:'"architect": {\n  ...,\n  "build": {\n    ...,\n    "options": {\n      "assets": {\n        {\n          "glob": "**/*",\n          "input": "./node_modules/svg-loaders/svg-smil-loaders",\n          "output": "/assets/svg-loaders/"\n        }\n      }\n    }\n  }\n}'}]},importAllCss:{expanded:!0,examples:[{title:"style.css",code:"@import '~ngx-youi/style/index.css';"}]},importOneCss:{expanded:!0,examples:[{title:"style.css",code:"/* import youi-common.css before import css of component */\n@import \"./youi-common.css\";\n\n@import '~ngx-youi/style/component/breadcrumb.css';"}]},importAllModule:{expanded:!0,examples:[{title:"app.module.ts",code:'import { NgModule } from "@angular/core";\nimport { NgxYouiModule } from "ngx-youi"\n\n@NgModule({\n  imports: [..., NgxYouiModule]\n})\n\nexport class AppModule {}'}]},importOneModule:{expanded:!0,examples:[{title:"app.module.ts",code:"import { NgModule } from \"@angular/core\";\nimport { BreadcrumbModule } from 'ngx-youi';\n\n@NgModule({\n  imports: [..., BreadcrumbModule],\n})\n  \nexport class AppModule {}"}]}};var e=i(6435),m=i(2313),p=i(814),u=i(7445);const c=[{path:"",children:[{path:"getting-start",component:(()=>{class t{constructor(o,n){this.route=o,this.titleService=n,this.sampleCode=JSON.parse(JSON.stringify(d))}ngOnInit(){this.titleService.setTitle(this.route.snapshot.data.title)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(s.gz),e.Y36(m.Dx))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-getting-start"]],decls:66,vars:6,consts:[[1,"page-wrapper"],[1,"card","breadcrumb"],[1,"card","p-4"],[1,"card-title"],[3,"sample"],[1,"description"],[1,"description-title"],[1,"material-icons","description-title__icon"],[1,"description-content"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"youi-breadcrumb",1)(2,"youi-breadcrumb-item"),e._uU(3," Guide "),e.qZA(),e.TgZ(4,"youi-breadcrumb-item"),e._uU(5," Getting Start "),e.qZA()(),e.TgZ(6,"div",2)(7,"div",3)(8,"span"),e._uU(9,"How to install"),e.qZA()(),e._UZ(10,"app-code-tab",4),e.qZA(),e.TgZ(11,"div",2)(12,"div",3)(13,"span"),e._uU(14,"Import SVG Loaders"),e.qZA()(),e.TgZ(15,"div",5)(16,"h3",6)(17,"span",7),e._uU(18,"double_arrow"),e.qZA(),e._uU(19,' Append Below setting in "YOUR_PROJECT.architect.build.options.assets" of angular.json '),e.qZA(),e.TgZ(20,"div",8),e._UZ(21,"app-code-tab",4),e.qZA()()(),e.TgZ(22,"div",2)(23,"div",3)(24,"span"),e._uU(25,"Import CSS for all components"),e.qZA()(),e.TgZ(26,"div",5)(27,"h3",6)(28,"span",7),e._uU(29,"double_arrow"),e.qZA(),e._uU(30," Import a CSS file for all components "),e.qZA(),e.TgZ(31,"div",8),e._UZ(32,"app-code-tab",4),e.qZA()()(),e.TgZ(33,"div",2)(34,"div",3)(35,"span"),e._uU(36,"Import CSS for a single components"),e.qZA()(),e.TgZ(37,"div",5)(38,"h3",6)(39,"span",7),e._uU(40,"double_arrow"),e.qZA(),e._uU(41," Import youi-common.css before import css of components. "),e.qZA(),e.TgZ(42,"h3",6)(43,"span",7),e._uU(44,"double_arrow"),e.qZA(),e._uU(45," Import a CSS file for a single component "),e.qZA(),e.TgZ(46,"div",8),e._UZ(47,"app-code-tab",4),e.qZA()()(),e.TgZ(48,"div",2)(49,"div",3)(50,"span"),e._uU(51,"Import Module"),e.qZA()(),e.TgZ(52,"div",5)(53,"h3",6)(54,"span",7),e._uU(55,"double_arrow"),e.qZA(),e._uU(56," Import a module file for all components "),e.qZA(),e.TgZ(57,"div",8),e._UZ(58,"app-code-tab",4),e.qZA()(),e.TgZ(59,"div",5)(60,"h3",6)(61,"span",7),e._uU(62,"double_arrow"),e.qZA(),e._uU(63," Import a module file for a single component "),e.qZA(),e.TgZ(64,"div",8),e._UZ(65,"app-code-tab",4),e.qZA()()()()),2&o&&(e.xp6(10),e.Q6J("sample",n.sampleCode.installPackage),e.xp6(11),e.Q6J("sample",n.sampleCode.importSvgLoaders),e.xp6(11),e.Q6J("sample",n.sampleCode.importAllCss),e.xp6(15),e.Q6J("sample",n.sampleCode.importOneCss),e.xp6(11),e.Q6J("sample",n.sampleCode.importAllModule),e.xp6(7),e.Q6J("sample",n.sampleCode.importOneModule))},directives:[p.LI,p.UN,u.E],styles:[".description[_ngcontent-%COMP%]{margin-top:.5rem;margin-bottom:.5rem}.description-title[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:.875rem;line-height:1.25rem;font-weight:700;--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.description-title__icon[_ngcontent-%COMP%]{margin-right:.5rem}.description-content[_ngcontent-%COMP%]{margin-top:.75rem}"]}),t})(),data:{title:"NGX-YOUI - Getting Start"}}]}];let g=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.Bz.forChild(c)],s.Bz]}),t})();var Z=i(2753);let v=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez,Z.m,g]]}),t})()}}]);
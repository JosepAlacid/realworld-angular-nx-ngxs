(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"Q/ra":function(t,e,o){"use strict";o.r(e),o.d(e,"SettingsModule",(function(){return f}));var r=o("2kYt"),n=o("nIj0"),s=o("t6I5"),c=o("yDe4"),i=o("wzxM"),l=o("EM62");let a=(()=>{class t{constructor(t){this.store=t,this.form=new n.d({username:new n.b,bio:new n.b,image:new n.b,email:new n.b,password:new n.b})}ngOnInit(){this.store.dispatch(new i.GetAuthUser).subscribe(()=>{const t=this.store.selectSnapshot(i.AuthSelectors.slices.user);this.form.patchValue(t)})}updateSettings(){this.store.dispatch(new i.UpdateAuthUser(this.form.value))}logout(){this.store.dispatch(new i.Logout).subscribe(()=>{this.store.dispatch(new s.a(["/home"]))})}}return t.\u0275fac=function(e){return new(e||t)(l.Jb(c.j))},t.\u0275cmp=l.Db({type:t,selectors:[["realworld-angular-nx-ngxs-settings"]],decls:23,vars:1,consts:[[1,"settings-page"],[1,"container","page"],[1,"row"],[1,"col-md-6","offset-md-3","col-xs-12"],[1,"text-xs-center"],[3,"formGroup"],[1,"form-group"],["type","text","formControlName","image","placeholder","URL of profile picture",1,"form-control"],["type","text","formControlName","username","placeholder","Your Name",1,"form-control","form-control-lg"],["rows","8","formControlName","bio","placeholder","Short bio about you",1,"form-control","form-control-lg"],["type","text","formControlName","email","placeholder","Email",1,"form-control","form-control-lg"],["type","password","formControlName","password","placeholder","Password",1,"form-control","form-control-lg"],[1,"btn","btn-lg","btn-primary","pull-xs-right",3,"click"],[1,"btn","btn-outline-danger",3,"click"]],template:function(t,e){1&t&&(l.Ob(0,"div",0),l.Ob(1,"div",1),l.Ob(2,"div",2),l.Ob(3,"div",3),l.Ob(4,"h1",4),l.kc(5,"Your Settings"),l.Nb(),l.Ob(6,"form",5),l.Ob(7,"fieldset"),l.Ob(8,"fieldset",6),l.Kb(9,"input",7),l.Nb(),l.Ob(10,"fieldset",6),l.Kb(11,"input",8),l.Nb(),l.Ob(12,"fieldset",6),l.Kb(13,"textarea",9),l.Nb(),l.Ob(14,"fieldset",6),l.Kb(15,"input",10),l.Nb(),l.Ob(16,"fieldset",6),l.Kb(17,"input",11),l.Nb(),l.Ob(18,"button",12),l.Vb("click",(function(){return e.updateSettings()})),l.kc(19," Update Settings "),l.Nb(),l.Nb(),l.Nb(),l.Kb(20,"hr"),l.Ob(21,"button",13),l.Vb("click",(function(){return e.logout()})),l.kc(22," Or click here to logout. "),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&t&&(l.zb(6),l.bc("formGroup",e.form))},directives:[n.j,n.g,n.e,n.a,n.f,n.c],styles:[""],changeDetection:0}),t})();var b=o("sEIs"),u=o("8j5Y");let p=(()=>{class t{constructor(t){this.store=t}canActivate(t,e){return this.store.selectOnce(i.AuthSelectors.loggedIn).pipe(Object(u.a)(t=>{t||this.store.dispatch(new s.a(["/"]))}))}}return t.\u0275fac=function(e){return new(e||t)(l.Sb(c.j))},t.\u0275prov=l.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),f=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(e){return new(e||t)},imports:[[r.c,b.k.forChild([{path:"",pathMatch:"full",component:a,canActivate:[p]}]),n.h]]}),t})()}}]);
import{P,Q as R,ea as U}from"./chunk-RJ74USOJ.js";import{Aa as T,Gb as $,Hb as h,Hc as L,J as C,Jb as I,Lb as c,Lc as k,Oc as z,Pc as A,Q as _,Sb as d,W as v,Xb as s,Yb as a,Zb as M,ea as y,fa as x,ga as r,gc as m,hc as j,ic as E,lb as o,ld as B,mb as l,na as N,oc as O,pc as w,q as g,qc as F,r as f,s as u,tb as b,ub as D,w as S}from"./chunk-IKFWAS6T.js";var W=["*"];function G(n,p){n&1&&(s(0,"span",2),M(1,"i",3)(2,"i",3)(3,"i",3)(4,"i",3),a())}function H(n,p){}function Z(n,p){if(n&1&&(s(0,"div",6),w(1),a()),n&2){let t=m(2);o(),F(t.nzTip)}}function q(n,p){if(n&1&&(s(0,"div")(1,"div",4),h(2,H,0,0,"ng-template",5)(3,Z,2,1,"div",6),a()()),n&2){let t=m(),i=O(1);o(),c("ant-spin-rtl",t.dir==="rtl")("ant-spin-spinning",t.isLoading)("ant-spin-lg",t.nzSize==="large")("ant-spin-sm",t.nzSize==="small")("ant-spin-show-text",t.nzTip),o(),I("ngTemplateOutlet",t.nzIndicator||i),o(),d(t.nzTip?3:-1)}}function J(n,p){if(n&1&&(s(0,"div",7),E(1),a()),n&2){let t=m();c("ant-spin-blur",t.isLoading)}}var V="spin",cn=(()=>{class n{constructor(t,i,e){this.nzConfigService=t,this.cdr=i,this.directionality=e,this._nzModuleName=V,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new g,this.spinning$=new f(this.nzSpinning),this.delay$=new u(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){this.delay$.pipe(y(this.nzDelay),v(),x(i=>i===0?this.spinning$:this.spinning$.pipe(_(e=>C(e?i:0)))),r(this.destroy$)).subscribe(i=>{this.isLoading=i,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(V).pipe(r(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.directionality.change?.pipe(r(this.destroy$)).subscribe(i=>{this.dir=i,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(t){let{nzSpinning:i,nzDelay:e}=t;i&&this.spinning$.next(this.nzSpinning),e&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static{this.\u0275fac=function(i){return new(i||n)(l(P),l(k),l(U))}}static{this.\u0275cmp=b({type:n,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(i,e){i&2&&c("ant-spin-nested-loading",!e.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:[2,"nzDelay","nzDelay",A],nzSimple:[2,"nzSimple","nzSimple",z],nzSpinning:[2,"nzSpinning","nzSpinning",z]},exportAs:["nzSpin"],features:[$,T],ngContentSelectors:W,decls:4,vars:2,consts:[["defaultTemplate",""],[1,"ant-spin-container",3,"ant-spin-blur"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(i,e){i&1&&(j(),h(0,G,5,0,"ng-template",null,0,L)(2,q,4,12,"div")(3,J,2,2,"div",1)),i&2&&(o(2),d(e.isLoading?2:-1),o(),d(e.nzSimple?-1:3))},dependencies:[B],encapsulation:2})}}return S([R()],n.prototype,"nzIndicator",void 0),n})(),dn=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=D({type:n})}static{this.\u0275inj=N({})}}return n})();export{cn as a,dn as b};

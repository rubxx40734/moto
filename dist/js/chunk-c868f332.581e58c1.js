(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c868f332"],{1799:function(t,e,c){"use strict";var a=c("7a23"),o={"aria-label":"Page navigation example"},l={class:"pagination justify-content-center"},n=Object(a["h"])("a",{class:"page-link",href:"#","aria-label":"Previous"},[Object(a["h"])("span",{"aria-hidden":"true"},"«")],-1),i=[n],s=["onClick"],r=Object(a["h"])("a",{class:"page-link",href:"#","aria-label":"Next"},[Object(a["h"])("span",{"aria-hidden":"true"},"»")],-1),d=[r];function u(t,e,c,n,r,u){return Object(a["y"])(),Object(a["g"])("nav",o,[Object(a["h"])("ul",l,[Object(a["h"])("li",{class:Object(a["s"])(["page-item",{disabled:!c.pages.has_pre}]),onClick:e[0]||(e[0]=Object(a["T"])((function(t){return u.updatePage(c.pages.current_page-1)}),["prevent"]))},i,2),(Object(a["y"])(!0),Object(a["g"])(a["a"],null,Object(a["E"])(c.pages.total_pages,(function(t,e){return Object(a["y"])(),Object(a["g"])("li",{class:Object(a["s"])(["page-item",{active:t===c.pages.current_page}]),key:e},[Object(a["h"])("a",{class:"page-link",href:"#",onClick:Object(a["T"])((function(e){return u.updatePage(t)}),["prevent"])},Object(a["J"])(t),9,s)],2)})),128)),Object(a["h"])("li",{class:Object(a["s"])(["page-item",{disabled:!c.pages.has_next}]),onClick:e[1]||(e[1]=Object(a["T"])((function(t){return u.updatePage(c.pages.current_page+1)}),["prevent"]))},d,2)])])}var b={data:function(){return{}},props:["pages"],methods:{updatePage:function(t){this.$emit("update-page",t)}}},p=c("6b0d"),h=c.n(p);const m=h()(b,[["render",u]]);e["a"]=m},e01a:function(t,e,c){"use strict";var a=c("23e7"),o=c("83ab"),l=c("da84"),n=c("1a2d"),i=c("1626"),s=c("861d"),r=c("9bf2").f,d=c("e893"),u=l.Symbol;if(o&&i(u)&&(!("description"in u.prototype)||void 0!==u().description)){var b={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new u(t):void 0===t?u():u(t);return""===t&&(b[e]=!0),e};d(p,u);var h=p.prototype=u.prototype;h.constructor=p;var m=h.toString,f="Symbol(test)"==String(u("test")),j=/^Symbol\((.*)\)[^)]+$/;r(h,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=m.call(t);if(n(b,t))return"";var c=f?e.slice(7,-1):e.replace(j,"$1");return""===c?void 0:c}}),a({global:!0,forced:!0},{Symbol:p})}},e6dc:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),o={class:"text-end mt-5 container"},l={class:"table mt-4 container"},n=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th",{width:"120"},"分類"),Object(a["h"])("th",null,"產品名稱"),Object(a["h"])("th",{width:"120"},"原價"),Object(a["h"])("th",{width:"120"},"售價"),Object(a["h"])("th",{width:"100"},"是否啟用"),Object(a["h"])("th",{width:"200"},"編輯")])],-1),i={class:"text-right"},s={class:"text-right"},r={key:0,class:"text-success"},d={key:1,class:"text-success"},u={class:"btn-group"},b=["onClick"],p=["onClick"];function h(t,e,c,h,m,f){var j=Object(a["G"])("Loading"),O=Object(a["G"])("ProductModal"),g=Object(a["G"])("DelModal"),v=Object(a["G"])("ToastMessages"),y=Object(a["G"])("Pagination");return Object(a["y"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(j,{active:m.isLoading},null,8,["active"]),Object(a["h"])("div",o,[Object(a["h"])("div",{class:"button btn btn-primary",type:"button",onClick:e[0]||(e[0]=function(t){return f.openModal(!0)})}," 新增一個產品 ")]),Object(a["h"])("table",l,[n,Object(a["h"])("tbody",null,[(Object(a["y"])(!0),Object(a["g"])(a["a"],null,Object(a["E"])(m.products,(function(t){return Object(a["y"])(),Object(a["g"])("tr",{key:t.id},[Object(a["h"])("td",null,Object(a["J"])(t.category),1),Object(a["h"])("td",null,Object(a["J"])(t.title),1),Object(a["h"])("td",i,Object(a["J"])(f.currency(t.origin_price)),1),Object(a["h"])("td",s,Object(a["J"])(f.currency(t.price)),1),Object(a["h"])("td",null,[t.is_enabled?(Object(a["y"])(),Object(a["g"])("span",r,"啟用")):(Object(a["y"])(),Object(a["g"])("span",d,"停用"))]),Object(a["h"])("td",null,[Object(a["h"])("div",u,[Object(a["h"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(e){return f.openModal(!1,t)}},"編輯",8,b),Object(a["h"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(e){return f.opendelmodal(t)}},"刪除",8,p)])])])})),128))])]),Object(a["k"])(O,{ref:"productModal",product:m.tempProduct,onUpdateProduct:f.updateProduct},null,8,["product","onUpdateProduct"]),Object(a["k"])(g,{ref:"delModal",product:m.tempProduct,onDelProduct:f.delProduct},null,8,["product","onDelProduct"]),Object(a["k"])(v),Object(a["k"])(y,{pages:m.pagination,onUpdatePage:f.getProducts},null,8,["pages","onUpdatePage"])],64)}var m=c("5530"),f=(c("99af"),c("a15b"),c("9bb9")),j=(c("a4d3"),c("e01a"),{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),O={class:"modal-dialog modal-xl",role:"document"},g={class:"modal-content border-0"},v=Object(a["h"])("div",{class:"modal-header bg-dark text-white"},[Object(a["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(a["h"])("span",null,"新增產品")]),Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body"},P={class:"row"},x={class:"col-sm-4"},k=Object(a["h"])("div",{class:"mb-3"},[Object(a["h"])("label",{for:"image",class:"form-label"},"輸入圖片網址"),Object(a["h"])("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結"})],-1),w={class:"mb-3"},M=Object(a["h"])("label",{for:"customFile",class:"form-label"},"或 上傳圖片 ",-1),U=["src"],_={class:"mb-3"},C=Object(a["h"])("label",{for:"customFile",class:"form-label mt-3"},"圖片二 ",-1),S=["src"],$={class:"mb-3"},F=Object(a["h"])("label",{for:"customFile",class:"form-label mt-3"},"圖片三 ",-1),L=["src"],N={class:"col-sm-8"},I={class:"mb-3"},J=Object(a["h"])("label",{for:"title",class:"form-label"},"標題",-1),V={class:"row gx-2"},D={class:"mb-3 col-md-6"},G=Object(a["h"])("label",{for:"category",class:"form-label"},"分類",-1),T={class:"mb-3 col-md-6"},E=Object(a["h"])("label",{for:"price",class:"form-label"},"單位",-1),q={class:"row gx-2"},z={class:"mb-3 col-md-6"},A=Object(a["h"])("label",{for:"origin_price",class:"form-label"},"原價",-1),B={class:"mb-3 col-md-6"},H=Object(a["h"])("label",{for:"price",class:"form-label"},"售價",-1),K=Object(a["h"])("hr",null,null,-1),Q={class:"mb-3"},R=Object(a["h"])("label",{for:"description",class:"form-label"},"產品描述",-1),W={class:"mb-3"},X=Object(a["h"])("label",{for:"content",class:"form-label"},"說明內容",-1),Y={class:"mb-3"},Z={class:"form-check"},tt=Object(a["h"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),et={class:"modal-footer"},ct=Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function at(t,e,c,o,l,n){return Object(a["y"])(),Object(a["g"])("div",j,[Object(a["h"])("div",O,[Object(a["h"])("div",g,[v,Object(a["h"])("div",y,[Object(a["h"])("div",P,[Object(a["h"])("div",x,[k,Object(a["h"])("div",w,[M,Object(a["h"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[0]||(e[0]=function(){return n.uploadFile&&n.uploadFile.apply(n,arguments)})},null,544)]),Object(a["h"])("img",{class:"img-fluid",src:l.tempProduct.imageUrl},null,8,U),Object(a["h"])("div",_,[C,Object(a["h"])("input",{type:"file",id:"customFile2",class:"form-control",ref:"files2",onChange:e[1]||(e[1]=function(){return n.Imgfn2&&n.Imgfn2.apply(n,arguments)})},null,544)]),Object(a["h"])("img",{class:"img-fluid",src:l.tempProduct.imageUrl2},null,8,S),Object(a["h"])("div",$,[F,Object(a["h"])("input",{type:"file",id:"customFile2",class:"form-control",ref:"files3",onChange:e[2]||(e[2]=function(){return n.Imgfn3&&n.Imgfn3.apply(n,arguments)})},null,544)]),Object(a["h"])("img",{class:"img-fluid",src:l.tempProduct.imageUrl3},null,8,L)]),Object(a["h"])("div",N,[Object(a["h"])("div",I,[J,Object(a["S"])(Object(a["h"])("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[3]||(e[3]=function(t){return l.tempProduct.title=t})},null,512),[[a["N"],l.tempProduct.title]])]),Object(a["h"])("div",V,[Object(a["h"])("div",D,[G,Object(a["S"])(Object(a["h"])("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[4]||(e[4]=function(t){return l.tempProduct.category=t})},null,512),[[a["N"],l.tempProduct.category]])]),Object(a["h"])("div",T,[E,Object(a["S"])(Object(a["h"])("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[5]||(e[5]=function(t){return l.tempProduct.unit=t})},null,512),[[a["N"],l.tempProduct.unit]])])]),Object(a["h"])("div",q,[Object(a["h"])("div",z,[A,Object(a["S"])(Object(a["h"])("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[6]||(e[6]=function(t){return l.tempProduct.origin_price=t})},null,512),[[a["N"],l.tempProduct.origin_price]])]),Object(a["h"])("div",B,[H,Object(a["S"])(Object(a["h"])("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[7]||(e[7]=function(t){return l.tempProduct.price=t})},null,512),[[a["N"],l.tempProduct.price]])])]),K,Object(a["h"])("div",Q,[R,Object(a["S"])(Object(a["h"])("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[8]||(e[8]=function(t){return l.tempProduct.description=t})},null,512),[[a["N"],l.tempProduct.description]])]),Object(a["h"])("div",W,[X,Object(a["S"])(Object(a["h"])("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[9]||(e[9]=function(t){return l.tempProduct.content=t})},null,512),[[a["N"],l.tempProduct.content]])]),Object(a["h"])("div",Y,[Object(a["h"])("div",Z,[Object(a["S"])(Object(a["h"])("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[10]||(e[10]=function(t){return l.tempProduct.is_enabled=t}),id:"is_enabled"},null,512),[[a["M"],l.tempProduct.is_enabled]]),tt])])])])]),Object(a["h"])("div",et,[ct,Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=function(){return n.clickUpdate&&n.clickUpdate.apply(n,arguments)})},"確認")])])])],512)}var ot=c("7c2b"),lt=c.n(ot),nt={props:{product:{type:Object,default:function(){return{}}}},watch:{product:function(){this.tempProduct=this.product}},data:function(){return{modal:{},tempProduct:{},isLoading:!1}},methods:{showModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()},clickUpdate:function(){this.$emit("update-product",this.tempProduct)},uploadFile:function(){var t=this,e=this.$refs.fileInput.files[0],c=new FormData;c.append("file-to-upload",e);var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("rubxx40734","/admin/upload");this.axios.post(a,c).then((function(e){console.log(e.data),e.data.success&&(t.tempProduct.imageUrl=e.data.imageUrl)}))},Imgfn2:function(){var t=this,e=this.$refs.files2.files[0],c=new FormData;c.append("file-to-upload",e);var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("rubxx40734","/admin/upload");this.axios.post(a,c).then((function(e){e.data.success&&(t.tempProduct.imageUrl2=e.data.imageUrl)}))},Imgfn3:function(){var t=this,e=this.$refs.files3.files[0],c=new FormData;c.append("file-to-upload",e);var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("rubxx40734","/admin/upload");this.axios.post(a,c).then((function(e){e.data.success&&(t.tempProduct.imageUrl3=e.data.imageUrl)}))}},mounted:function(){this.modal=new lt.a(this.$refs.modal),console.log(this.modal)}},it=c("6b0d"),st=c.n(it);const rt=st()(nt,[["render",at]]);var dt=rt,ut={class:"modal fade",id:"exampleModal",tabindex:"-1",ref:"modal","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},bt={class:"modal-dialog"},pt={class:"modal-content"},ht=Object(a["h"])("div",{class:"modal-header"},[Object(a["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},"將此產品移除!"),Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),mt={class:"modal-body"},ft=Object(a["j"])(" 您確定要將 "),jt={class:"text-danger"},Ot=Object(a["j"])(" 刪除嗎? "),gt={class:"modal-footer"},vt=Object(a["h"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function yt(t,e,c,o,l,n){var i=this;return Object(a["y"])(),Object(a["g"])("div",ut,[Object(a["h"])("div",bt,[Object(a["h"])("div",pt,[ht,Object(a["h"])("div",mt,[ft,Object(a["h"])("span",jt,Object(a["J"])(l.tempProduct.title),1),Ot]),Object(a["h"])("div",gt,[vt,Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=function(e){return t.$emit("del-product",i.tempProduct)})},"確認")])])])],512)}var Pt={data:function(){return{modal:{},tempProduct:{}}},props:{product:{}},watch:{product:function(){this.tempProduct=this.product}},methods:{showModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()}},mounted:function(){this.modal=new lt.a(this.$refs.modal)}};const xt=st()(Pt,[["render",yt]]);var kt=xt,wt=c("f367"),Mt=c("1799"),Ut={data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:dt,DelModal:kt,ToastMessages:wt["a"],Pagination:Mt["a"]},inject:["emitter"],methods:{currency:f["a"],openModal:function(t,e){this.tempProduct=t?{}:Object(m["a"])({},e),this.isNew=t;var c=this.$refs.productModal;c.showModal()},closeModal:function(){this.tempProduct={};var t=this.$refs.productModal;t.hideModal()},opendelmodal:function(t){this.tempProduct=Object(m["a"])({},t);var e=this.$refs.delModal;e.showModal()},getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("rubxx40734","/admin/products?page=").concat(e);this.isLoading=!0,this.axios.get(c).then((function(e){console.log(e.data),t.products=e.data.products,t.pagination=e.data.pagination,t.isLoading=!1}))},updateProduct:function(t){var e=this;this.tempProduct=t,this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("rubxx40734","/admin/product"),a="post";this.isNew||(c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("rubxx40734","/admin/product/").concat(t.id),a="put"),this.axios[a](c,{data:this.tempProduct}).then((function(t){t.data.success?e.emitter.emit("push-message",{style:"success",title:"更新成功"}):e.emitter.emit("push-message",{style:"danger",title:"更新失敗><",content:t.data.message.join("、")}),e.closeModal(),e.tempProduct={},e.isLoading=!1,e.getProducts()}))},delProduct:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("rubxx40734","/admin/product/").concat(t.id);this.axios.delete(c).then((function(t){t.data.success&&e.emitter.emit("push-message",{style:"success",title:"刪除產品成功 ^_^"}),console.log(t);var c=e.$refs.delModal;c.hideModal(),e.getProducts()}))}},created:function(){this.getProducts()}};const _t=st()(Ut,[["render",h]]);e["default"]=_t}}]);
//# sourceMappingURL=chunk-c868f332.581e58c1.js.map
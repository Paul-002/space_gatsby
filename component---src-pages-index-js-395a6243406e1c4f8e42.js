(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{292:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(147),l=(a(151),a(7),a(6),a(4),a(9),a(317)),i=a(73),c=a(280),s=a(282),u=a(201),m=a(332),p=a(331),d=a(8),f=a(318),g=a.n(f),h=(a(26),a(3)),x=a.n(h),b=function(e){var t=new Date(1e3*e.unix),a=t.getHours()+":"+("0"+t.getMinutes()).substr(-2);return e.date?t.toString().substr(0,15):a},y=b;b.propTypes={unix:x.a.number};var E=a(319),A=function(e){var t=function(){return r.a.createElement("h3",null,"Lift off!")};return r.a.createElement(E.a,{date:new Date(1e3*e.unix),renderer:function(e){var a=e.days,n=e.hours,o=e.minutes,l=e.seconds;return e.completed?r.a.createElement(t,null):r.a.createElement(u.a,{variant:"h5"},a,"d ",n,"h ",o<10?"0"+o:o,"m"," ",l<10?"0"+l:l,"s")}},r.a.createElement(t,null))};A.propTypes={unix:x.a.number};var w=A,v=Object(p.a)(function(){return{shape:{position:"relative",borderTop:"50px solid rgba(34,39,43,0.8)",borderBottom:"solid transparent",borderLeft:"5px transparent",borderRight:"70px solid transparent",backgroundColor:"rgb(0,82,136)",height:"1px",width:"70%"},heading:{position:"absolute",color:"#FFFFFF",top:"-42px",left:"5px",minWidth:"260px"},button:{margin:"15px 0px"},link:{textDecoration:"none"}}}),j=Object(d.a)({root:{display:"flex",flexDirection:"column",marginTop:"50px",width:"95%",margin:"0 auto"},"@media (max-width: 600px)":{root:{marginTop:"10px"}}})(c.a),k=Object(d.a)({root:{display:"flex",justifyContent:"center",flexWrap:"wrap",marginTop:"30px"},"@media (max-width: 600px)":{root:{marginTop:"20px"}}})(s.a),T=Object(d.a)({root:{height:"300px",width:"300px",padding:"20px"}})(s.a),C=Object(d.a)({root:{display:"flex",flexDirection:"column",padding:"5px"}})(s.a),H=Object(d.a)({root:{marginBottom:"5px"}})(u.a),O=Object(d.a)({root:{display:"flex",justifyContent:"center"}})(s.a),N=Object(d.a)({root:{marginRight:"10px"}})(s.a),F=Object(d.a)({root:{}})(s.a),M=Object(d.a)({root:{fontWeight:"bold",marginBottom:"5px"}})(u.a),S=Object(d.a)({root:{display:"flex",justifyContent:"center",marginBottom:"20px"},"@media (max-width: 600px)":{root:{marginTop:"20px"}}})(s.a),Q=function(){var e=v(),t=l.data,a=t.file.childImageSharp.fluid,n=t.space_gatsby,o=n.launchNext,c=o.rocket,p=o.launch_date_unix,d=o.mission_name,f=n.launchNext.launch_site.site_name,h=n.launchNext,x=h.rocket,b=x.second_stage.block,E=x.first_stage.cores,A=h.rocket.second_stage.payloads;return r.a.createElement(j,{elevation:10},r.a.createElement(k,null,r.a.createElement(C,null,r.a.createElement(s.a,{className:e.shape},r.a.createElement(u.a,{className:e.heading,variant:"h4"},d)),r.a.createElement(m.a,{className:e.button,color:"primary",variant:"outlined"},r.a.createElement(u.a,{style:{width:"100%",height:"100%"},className:e.link,color:"primary",variant:"h6",component:i.a,to:"/upcomingLaunch/"},"Mission details")),r.a.createElement(O,null,r.a.createElement(N,null,r.a.createElement(M,null,"Launch date"),r.a.createElement(M,null,"Launch time"),r.a.createElement(M,null,"Launch site"),r.a.createElement(M,null,"Landing site"),r.a.createElement(M,null,"Rocket type"),r.a.createElement(M,null,"Payload")),r.a.createElement(F,null,r.a.createElement(H,{variant:"body1"},r.a.createElement(y,{date:!0,unix:p})),r.a.createElement(H,{variant:"body1"},r.a.createElement(y,{unix:p})),r.a.createElement(H,{variant:"body1"},f),r.a.createElement(H,{variant:"body1"},E.map(function(e){return null!==e[Object.keys(e)]?e[Object.keys(e)]:"No landing"})),r.a.createElement(H,null,function(e){return null===e?c.rocket_name+" "+c.rocket_type:c.rocket_name+" "+c.rocket_type+" block "+e}(b)),r.a.createElement(H,null,A.map(function(e){return e[Object.keys(e)]}))))),r.a.createElement(T,null,r.a.createElement(g.a,{fluid:a,alt:"Mission patch"}))),r.a.createElement(S,null,r.a.createElement(w,{unix:p})))};t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(Q,null))}},317:function(e){e.exports={data:{space_gatsby:{launchNext:{launch_date_unix:1571270400,mission_name:"Starlink 2",rocket:{second_stage:{payloads:[{payload_type:"Satellite"}],block:5},first_stage:{cores:[{landing_vehicle:"OCISLY"}]},rocket_name:"Falcon 9",rocket_type:"FT"},launch_site:{site_name:"CCAFS SLC 40"}}},file:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD+0lEQVQ4y32Ve0zbVRTHb2npmz5oWVta2vLa4nAIFloGbbEr25BHJyOSQXUsus29YuYejGQGE0x0mRsDt0wzTYAsMTiNGyxkyRzTLDr9wxj/8BUTw0S3wKZzQKIQfj++3t4fP35Fpic5OffXc/rp9957fqcECzY/P888YTzPgeN4/J/Nzc3Ren7Zd4n0gVQo2q9jP+GjD/twursT3V2voOuNDly7ehG/37u9WMNx3BIoWQoTknfHb2Hf7mcQqijEmjWPwpvjg8Plg8GYhWg0hIZNEZw43oF5fmYZlIhSRWU3Ph2GxawCIQS6tACyMisQixahdfNjqKoogdVahRX2AMtHKn3484/bS6Ak+eHH779CaclqrFz1CLyeepQV16CvpxrXh/ZiZKgNl/rjOH40DMeKOhB5iEHLAwWYnZlaOHteUjg7M414cz083nwUFrWj+1gHvr55Av0D36Gnbxadb05iU/MvaH1uBLt3HYPetB/y1DCDHjqwc1ElEbfa33sGSiWBSlMJh6cd+4+cxdu9A7g8MoWrXwDfjE4hvuM36EyXYcs6jWD0AxjS2yjQBa2GYPTnb4Ut87ygMFZXyX7Nk3MUa8NdqKlZh1h9LU6dG8TFa5M4eLATsYZhqLW1rM5oDqCw5HUo1Y3s+dTJTukMp6fuw+0y0oQdVkcPvHlnEQ5VIBQKIbKuCv5AMdLT3WhqHqTHcQQ2m41BMl1+ZHpeZuv4lloJOH5nFBo1gUxeCo1+D8yWBvj9PgqkF+CwQ65w07Y5BL35AsqCg9hQ/RYs1jJhR7l7aTQiGnk80TgC8O74GPQ6ApKyForU1UiRl8BgqqNK9NBos2HKeBdO72dwefuhM/fCnfMent5yHU73NhgtLRRowoYqv6Tw77+msSo/gyY8SFXm0miGQvUS60O32wNtWgs9uyAUykakqndBq6+E3eHH5sYXaE/GmdIdzzcJQLEHt219iiVU6nwWiSwdKYoaaHSNFByjwAC9gCeoN8HpzGU1TqcNGzduZevzfWdEoNA2n4wMsYRcYYRMJhOghEZZIY1u6iqmXKWphsHgpTVEeFsitfCXFuDexJgATDQ2xwtT49mWGCsSgRJYclmKGRqNla3T0ozIzvbiwsA7UmOLr0zCJh9MoMxfAI8nm6owLoMlu8WaQevcOHxg+8Jg+NdwEM/ywf07eHFfK3y+YtjtmVSFgd66nCqTUWVa6jrk5a2kTf8kXnu1LSEHyaJI8nAUoTw3g6FL57FzezMi4SCy8m3IKFIiWF6O+rr1aD+8B1/e/HhxJoowpvBh03pxivOzGLv1A72wQQxfeR+f37iCCTorpeHKL5va5GF/AeyiOO4/xz+/kE+uF+0fB9wKyI8tfMEAAAAASUVORK5CYII=",aspectRatio:.9912280701754386,src:"/space_gatsby/static/3ebf79e850fb0f8276ff43f761cf5468/3f92b/img.png",srcSet:"/space_gatsby/static/3ebf79e850fb0f8276ff43f761cf5468/7c0ed/img.png 200w,\n/space_gatsby/static/3ebf79e850fb0f8276ff43f761cf5468/647de/img.png 400w,\n/space_gatsby/static/3ebf79e850fb0f8276ff43f761cf5468/3f92b/img.png 452w",sizes:"(max-width: 452px) 100vw, 452px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-395a6243406e1c4f8e42.js.map
import{O as Jt,S as Al,c as wa}from"./index-CGy1N8vZ.js";const is="185",wl=0,As=1,Rl=2,la=1,Cl=2,Ar=3,bi=0,bt=1,ci=2,hi=0,lr=1,ws=2,Rs=3,Cs=4,Pl=5,Ni=100,Ll=101,Ul=102,Dl=103,Nl=104,Il=200,Ol=201,Fl=202,Bl=203,un=204,hn=205,zl=206,Hl=207,Gl=208,Vl=209,kl=210,Wl=211,Xl=212,jl=213,ql=214,dn=0,pn=1,fn=2,hr=3,mn=4,gn=5,_n=6,vn=7,rs=0,Yl=1,Zl=2,ei=0,Po=1,Lo=2,Uo=3,Do=4,No=5,Io=6,Oo=7,Fo=300,Bi=301,dr=302,Ra=303,Ca=304,Sa=306,xn=1e3,ui=1001,Mn=1002,_t=1003,Jl=1004,Or=1005,St=1006,Pa=1007,Oi=1008,Nt=1009,Bo=1010,zo=1011,Rr=1012,as=1013,ii=1014,$t=1015,pi=1016,ns=1017,ss=1018,Cr=1020,Ho=35902,Go=35899,Vo=1021,ko=1022,kt=1023,fi=1026,Fi=1027,Wo=1028,os=1029,zi=1030,ls=1031,cs=1033,ca=33776,ua=33777,ha=33778,da=33779,Sn=35840,yn=35841,En=35842,Tn=35843,bn=36196,An=37492,wn=37496,Rn=37488,Cn=37489,fa=37490,Pn=37491,Ln=37808,Un=37809,Dn=37810,Nn=37811,In=37812,On=37813,Fn=37814,Bn=37815,zn=37816,Hn=37817,Gn=37818,Vn=37819,kn=37820,Wn=37821,Xn=36492,jn=36494,qn=36495,Yn=36283,Zn=36284,ma=36285,Jn=36286,Kl=3200,Kn=0,$l=1,Ei="",Ft="srgb",ga="srgb-linear",_a="linear",je="srgb",Xi=7680,Ps=519,Ql=512,ec=513,tc=514,us=515,ic=516,rc=517,hs=518,ac=519,Ls=35044,Us="300 es",Qt=2e3,Pr=2001;function nc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function va(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function sc(){const r=va("canvas");return r.style.display="block",r}const Ds={};function Ns(...r){const e="THREE."+r.shift();console.log(e,...r)}function Xo(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function be(...r){r=Xo(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ke(...r){r=Xo(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function cr(...r){const e=r.join(" ");e in Ds||(Ds[e]=!0,be(...r))}function oc(r,e,t){return new Promise(function(i,a){function n(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(n,t);break;default:i()}}setTimeout(n,t)})}const lc={[dn]:pn,[fn]:_n,[mn]:vn,[hr]:gn,[pn]:dn,[_n]:fn,[vn]:mn,[gn]:hr};class Gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const n=a.indexOf(t);n!==-1&&a.splice(n,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let n=0,s=a.length;n<s;n++)a[n].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],La=Math.PI/180,$n=180/Math.PI;function Lr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[r&255]+xt[r>>8&255]+xt[r>>16&255]+xt[r>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function Ne(r,e,t){return Math.max(e,Math.min(t,r))}function cc(r,e){return(r%e+e)%e}function Ua(r,e,t){return(1-t)*r+t*e}function vr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const jo=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ne(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ne(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*i-s*a+e.x,this.y=n*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jo.prototype.isVector2=!0;let He=jo;class mr{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,n,s,o){let c=i[a+0],l=i[a+1],d=i[a+2],g=i[a+3],u=n[s+0],p=n[s+1],v=n[s+2],S=n[s+3];if(g!==S||c!==u||l!==p||d!==v){let m=c*u+l*p+d*v+g*S;m<0&&(u=-u,p=-p,v=-v,S=-S,m=-m);let h=1-o;if(m<.9995){const A=Math.acos(m),C=Math.sin(A);h=Math.sin(h*A)/C,o=Math.sin(o*A)/C,c=c*h+u*o,l=l*h+p*o,d=d*h+v*o,g=g*h+S*o}else{c=c*h+u*o,l=l*h+p*o,d=d*h+v*o,g=g*h+S*o;const A=1/Math.sqrt(c*c+l*l+d*d+g*g);c*=A,l*=A,d*=A,g*=A}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,a,n,s){const o=i[a],c=i[a+1],l=i[a+2],d=i[a+3],g=n[s],u=n[s+1],p=n[s+2],v=n[s+3];return e[t]=o*v+d*g+c*p-l*u,e[t+1]=c*v+d*u+l*g-o*p,e[t+2]=l*v+d*p+o*u-c*g,e[t+3]=d*v-o*g-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,n=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(i/2),d=o(a/2),g=o(n/2),u=c(i/2),p=c(a/2),v=c(n/2);switch(s){case"XYZ":this._x=u*d*g+l*p*v,this._y=l*p*g-u*d*v,this._z=l*d*v+u*p*g,this._w=l*d*g-u*p*v;break;case"YXZ":this._x=u*d*g+l*p*v,this._y=l*p*g-u*d*v,this._z=l*d*v-u*p*g,this._w=l*d*g+u*p*v;break;case"ZXY":this._x=u*d*g-l*p*v,this._y=l*p*g+u*d*v,this._z=l*d*v+u*p*g,this._w=l*d*g-u*p*v;break;case"ZYX":this._x=u*d*g-l*p*v,this._y=l*p*g+u*d*v,this._z=l*d*v-u*p*g,this._w=l*d*g+u*p*v;break;case"YZX":this._x=u*d*g+l*p*v,this._y=l*p*g+u*d*v,this._z=l*d*v-u*p*g,this._w=l*d*g-u*p*v;break;case"XZY":this._x=u*d*g-l*p*v,this._y=l*p*g-u*d*v,this._z=l*d*v+u*p*g,this._w=l*d*g+u*p*v;break;default:be("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],n=t[8],s=t[1],o=t[5],c=t[9],l=t[2],d=t[6],g=t[10],u=i+o+g;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-c)*p,this._y=(n-l)*p,this._z=(s-a)*p}else if(i>o&&i>g){const p=2*Math.sqrt(1+i-o-g);this._w=(d-c)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(n+l)/p}else if(o>g){const p=2*Math.sqrt(1+o-i-g);this._w=(n-l)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+g-i-o);this._w=(s-a)/p,this._x=(n+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,n=e._z,s=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+s*o+a*l-n*c,this._y=a*d+s*c+n*o-i*l,this._z=n*d+s*l+i*c-a*o,this._w=s*d-i*o-a*c-n*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,n=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,n=-n,s=-s,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+i*t,this._y=this._y*c+a*t,this._z=this._z*c+n*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+a*t,this._z=this._z*c+n*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qo=class{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Is.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Is.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*a,this.y=n[1]*t+n[4]*i+n[7]*a,this.z=n[2]*t+n[5]*i+n[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,n=e.elements,s=1/(n[3]*t+n[7]*i+n[11]*a+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*a+n[12])*s,this.y=(n[1]*t+n[5]*i+n[9]*a+n[13])*s,this.z=(n[2]*t+n[6]*i+n[10]*a+n[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,n=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*a-o*i),d=2*(o*t-n*a),g=2*(n*i-s*t);return this.x=t+c*l+s*g-o*d,this.y=i+c*d+o*l-n*g,this.z=a+c*g+n*d-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*a,this.y=n[1]*t+n[5]*i+n[9]*a,this.z=n[2]*t+n[6]*i+n[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ne(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,n=e.z,s=t.x,o=t.y,c=t.z;return this.x=a*c-n*o,this.y=n*s-i*c,this.z=i*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Da.copy(this).projectOnVector(e),this.sub(Da)}reflect(e){return this.sub(Da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ne(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qo.prototype.isVector3=!0;let F=qo;const Da=new F,Is=new mr,Yo=class{constructor(e,t,i,a,n,s,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,n,s,o,c,l)}set(e,t,i,a,n,s,o,c,l){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=t,d[4]=n,d[5]=c,d[6]=i,d[7]=s,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,n=this.elements,s=i[0],o=i[3],c=i[6],l=i[1],d=i[4],g=i[7],u=i[2],p=i[5],v=i[8],S=a[0],m=a[3],h=a[6],A=a[1],C=a[4],M=a[7],b=a[2],T=a[5],w=a[8];return n[0]=s*S+o*A+c*b,n[3]=s*m+o*C+c*T,n[6]=s*h+o*M+c*w,n[1]=l*S+d*A+g*b,n[4]=l*m+d*C+g*T,n[7]=l*h+d*M+g*w,n[2]=u*S+p*A+v*b,n[5]=u*m+p*C+v*T,n[8]=u*h+p*M+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],n=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*s*d-t*o*l-i*n*d+i*o*c+a*n*l-a*s*c}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],n=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8],g=d*s-o*l,u=o*c-d*n,p=l*n-s*c,v=t*g+i*u+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=g*S,e[1]=(a*l-d*i)*S,e[2]=(o*i-a*s)*S,e[3]=u*S,e[4]=(d*t-a*c)*S,e[5]=(a*n-o*t)*S,e[6]=p*S,e[7]=(i*c-l*t)*S,e[8]=(s*t-i*n)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,n,s,o){const c=Math.cos(n),l=Math.sin(n);return this.set(i*c,i*l,-i*(c*s+l*o)+s+e,-a*l,a*c,-a*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Na.makeScale(e,t)),this}rotate(e){return cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Na.makeRotation(-e)),this}translate(e,t){return cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Yo.prototype.isMatrix3=!0;let Pe=Yo;const Na=new Pe,Os=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fs=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uc(){const r={enabled:!0,workingColorSpace:ga,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===je&&(a.r=di(a.r),a.g=di(a.g),a.b=di(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===je&&(a.r=ur(a.r),a.g=ur(a.g),a.b=ur(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ei?_a:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return cr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return cr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,n)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[ga]:{primaries:e,whitePoint:i,transfer:_a,toXYZ:Os,fromXYZ:Fs,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:i,transfer:je,toXYZ:Os,fromXYZ:Fs,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),r}const ze=uc();function di(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ur(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ji;class hc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ji===void 0&&(ji=va("canvas")),ji.width=e.width,ji.height=e.height;const a=ji.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=ji}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=va("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),n=a.data;for(let s=0;s<n.length;s++)n[s]=di(n[s]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(di(t[i]/255)*255):t[i]=di(t[i]);return{data:t,width:e.width,height:e.height}}else return be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dc=0;class ds{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dc++}),this.uuid=Lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let n;if(Array.isArray(a)){n=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?n.push(Ia(a[s].image)):n.push(Ia(a[s]))}else n=Ia(a);i.url=n}return t||(e.images[this.uuid]=i),i}}function Ia(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(be("Texture: Unable to serialize Texture."),{})}let pc=0;const Oa=new F;class At extends Gi{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,i=ui,a=ui,n=St,s=Oi,o=kt,c=Nt,l=At.DEFAULT_ANISOTROPY,d=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pc++}),this.uuid=Lr(),this.name="",this.source=new ds(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Oa).x}get height(){return this.source.getSize(Oa).y}get depth(){return this.source.getSize(Oa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){be(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xn:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Mn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xn:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Mn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Fo;At.DEFAULT_ANISOTROPY=1;const Zo=class{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a+s[12]*n,this.y=s[1]*t+s[5]*i+s[9]*a+s[13]*n,this.z=s[2]*t+s[6]*i+s[10]*a+s[14]*n,this.w=s[3]*t+s[7]*i+s[11]*a+s[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,n;const s=e.elements,o=s[0],c=s[4],l=s[8],d=s[1],g=s[5],u=s[9],p=s[2],v=s[6],S=s[10];if(Math.abs(c-d)<.01&&Math.abs(l-p)<.01&&Math.abs(u-v)<.01){if(Math.abs(c+d)<.1&&Math.abs(l+p)<.1&&Math.abs(u+v)<.1&&Math.abs(o+g+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const h=(o+1)/2,A=(g+1)/2,C=(S+1)/2,M=(c+d)/4,b=(l+p)/4,T=(u+v)/4;return h>A&&h>C?h<.01?(i=0,a=.707106781,n=.707106781):(i=Math.sqrt(h),a=M/i,n=b/i):A>C?A<.01?(i=.707106781,a=0,n=.707106781):(a=Math.sqrt(A),i=M/a,n=T/a):C<.01?(i=.707106781,a=.707106781,n=0):(n=Math.sqrt(C),i=b/n,a=T/n),this.set(i,a,n,t),this}let m=Math.sqrt((v-u)*(v-u)+(l-p)*(l-p)+(d-c)*(d-c));return Math.abs(m)<.001&&(m=1),this.x=(v-u)/m,this.y=(l-p)/m,this.z=(d-c)/m,this.w=Math.acos((o+g+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this.w=Ne(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this.w=Ne(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ne(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zo.prototype.isVector4=!0;let st=Zo;class fc extends Gi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:i.depth},n=new At(a),s=i.count;for(let o=0;o<s;o++)this.textures[o]=n.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,n=this.textures.length;a<n;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new ds(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends fc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Jo extends At{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=_t,this.minFilter=_t,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mc extends At{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=_t,this.minFilter=_t,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ko=class $o{constructor(e,t,i,a,n,s,o,c,l,d,g,u,p,v,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,n,s,o,c,l,d,g,u,p,v,S,m)}set(e,t,i,a,n,s,o,c,l,d,g,u,p,v,S,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=a,h[1]=n,h[5]=s,h[9]=o,h[13]=c,h[2]=l,h[6]=d,h[10]=g,h[14]=u,h[3]=p,h[7]=v,h[11]=S,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $o().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,a=1/qi.setFromMatrixColumn(e,0).length(),n=1/qi.setFromMatrixColumn(e,1).length(),s=1/qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,n=e.z,s=Math.cos(i),o=Math.sin(i),c=Math.cos(a),l=Math.sin(a),d=Math.cos(n),g=Math.sin(n);if(e.order==="XYZ"){const u=s*d,p=s*g,v=o*d,S=o*g;t[0]=c*d,t[4]=-c*g,t[8]=l,t[1]=p+v*l,t[5]=u-S*l,t[9]=-o*c,t[2]=S-u*l,t[6]=v+p*l,t[10]=s*c}else if(e.order==="YXZ"){const u=c*d,p=c*g,v=l*d,S=l*g;t[0]=u+S*o,t[4]=v*o-p,t[8]=s*l,t[1]=s*g,t[5]=s*d,t[9]=-o,t[2]=p*o-v,t[6]=S+u*o,t[10]=s*c}else if(e.order==="ZXY"){const u=c*d,p=c*g,v=l*d,S=l*g;t[0]=u-S*o,t[4]=-s*g,t[8]=v+p*o,t[1]=p+v*o,t[5]=s*d,t[9]=S-u*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const u=s*d,p=s*g,v=o*d,S=o*g;t[0]=c*d,t[4]=v*l-p,t[8]=u*l+S,t[1]=c*g,t[5]=S*l+u,t[9]=p*l-v,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const u=s*c,p=s*l,v=o*c,S=o*l;t[0]=c*d,t[4]=S-u*g,t[8]=v*g+p,t[1]=g,t[5]=s*d,t[9]=-o*d,t[2]=-l*d,t[6]=p*g+v,t[10]=u-S*g}else if(e.order==="XZY"){const u=s*c,p=s*l,v=o*c,S=o*l;t[0]=c*d,t[4]=-g,t[8]=l*d,t[1]=u*g+S,t[5]=s*d,t[9]=p*g-v,t[2]=v*g-p,t[6]=o*d,t[10]=S*g+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gc,e,_c)}lookAt(e,t,i){const a=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),_i.crossVectors(i,Ut),_i.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),_i.crossVectors(i,Ut)),_i.normalize(),Fr.crossVectors(Ut,_i),a[0]=_i.x,a[4]=Fr.x,a[8]=Ut.x,a[1]=_i.y,a[5]=Fr.y,a[9]=Ut.y,a[2]=_i.z,a[6]=Fr.z,a[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,n=this.elements,s=i[0],o=i[4],c=i[8],l=i[12],d=i[1],g=i[5],u=i[9],p=i[13],v=i[2],S=i[6],m=i[10],h=i[14],A=i[3],C=i[7],M=i[11],b=i[15],T=a[0],w=a[4],_=a[8],E=a[12],L=a[1],R=a[5],N=a[9],j=a[13],X=a[2],H=a[6],q=a[10],k=a[14],J=a[3],ee=a[7],re=a[11],ue=a[15];return n[0]=s*T+o*L+c*X+l*J,n[4]=s*w+o*R+c*H+l*ee,n[8]=s*_+o*N+c*q+l*re,n[12]=s*E+o*j+c*k+l*ue,n[1]=d*T+g*L+u*X+p*J,n[5]=d*w+g*R+u*H+p*ee,n[9]=d*_+g*N+u*q+p*re,n[13]=d*E+g*j+u*k+p*ue,n[2]=v*T+S*L+m*X+h*J,n[6]=v*w+S*R+m*H+h*ee,n[10]=v*_+S*N+m*q+h*re,n[14]=v*E+S*j+m*k+h*ue,n[3]=A*T+C*L+M*X+b*J,n[7]=A*w+C*R+M*H+b*ee,n[11]=A*_+C*N+M*q+b*re,n[15]=A*E+C*j+M*k+b*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],n=e[12],s=e[1],o=e[5],c=e[9],l=e[13],d=e[2],g=e[6],u=e[10],p=e[14],v=e[3],S=e[7],m=e[11],h=e[15],A=c*p-l*u,C=o*p-l*g,M=o*u-c*g,b=s*p-l*d,T=s*u-c*d,w=s*g-o*d;return t*(S*A-m*C+h*M)-i*(v*A-m*b+h*T)+a*(v*C-S*b+h*w)-n*(v*M-S*T+m*w)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],a=e[8],n=e[1],s=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(s*d-o*l)-i*(n*d-o*c)+a*(n*l-s*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],n=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8],g=e[9],u=e[10],p=e[11],v=e[12],S=e[13],m=e[14],h=e[15],A=t*o-i*s,C=t*c-a*s,M=t*l-n*s,b=i*c-a*o,T=i*l-n*o,w=a*l-n*c,_=d*S-g*v,E=d*m-u*v,L=d*h-p*v,R=g*m-u*S,N=g*h-p*S,j=u*h-p*m,X=A*j-C*N+M*R+b*L-T*E+w*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/X;return e[0]=(o*j-c*N+l*R)*H,e[1]=(a*N-i*j-n*R)*H,e[2]=(S*w-m*T+h*b)*H,e[3]=(u*T-g*w-p*b)*H,e[4]=(c*L-s*j-l*E)*H,e[5]=(t*j-a*L+n*E)*H,e[6]=(m*M-v*w-h*C)*H,e[7]=(d*w-u*M+p*C)*H,e[8]=(s*N-o*L+l*_)*H,e[9]=(i*L-t*N-n*_)*H,e[10]=(v*T-S*M+h*A)*H,e[11]=(g*M-d*T-p*A)*H,e[12]=(o*E-s*R-c*_)*H,e[13]=(t*R-i*E+a*_)*H,e[14]=(S*C-v*b-m*A)*H,e[15]=(d*b-g*C+u*A)*H,this}scale(e){const t=this.elements,i=e.x,a=e.y,n=e.z;return t[0]*=i,t[4]*=a,t[8]*=n,t[1]*=i,t[5]*=a,t[9]*=n,t[2]*=i,t[6]*=a,t[10]*=n,t[3]*=i,t[7]*=a,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),n=1-i,s=e.x,o=e.y,c=e.z,l=n*s,d=n*o;return this.set(l*s+i,l*o-a*c,l*c+a*o,0,l*o+a*c,d*o+i,d*c-a*s,0,l*c-a*o,d*c+a*s,n*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,n,s){return this.set(1,i,n,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,n=t._x,s=t._y,o=t._z,c=t._w,l=n+n,d=s+s,g=o+o,u=n*l,p=n*d,v=n*g,S=s*d,m=s*g,h=o*g,A=c*l,C=c*d,M=c*g,b=i.x,T=i.y,w=i.z;return a[0]=(1-(S+h))*b,a[1]=(p+M)*b,a[2]=(v-C)*b,a[3]=0,a[4]=(p-M)*T,a[5]=(1-(u+h))*T,a[6]=(m+A)*T,a[7]=0,a[8]=(v+C)*w,a[9]=(m-A)*w,a[10]=(1-(u+S))*w,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const n=this.determinantAffine();if(n===0)return i.set(1,1,1),t.identity(),this;let s=qi.set(a[0],a[1],a[2]).length();const o=qi.set(a[4],a[5],a[6]).length(),c=qi.set(a[8],a[9],a[10]).length();n<0&&(s=-s),zt.copy(this);const l=1/s,d=1/o,g=1/c;return zt.elements[0]*=l,zt.elements[1]*=l,zt.elements[2]*=l,zt.elements[4]*=d,zt.elements[5]*=d,zt.elements[6]*=d,zt.elements[8]*=g,zt.elements[9]*=g,zt.elements[10]*=g,t.setFromRotationMatrix(zt),i.x=s,i.y=o,i.z=c,this}makePerspective(e,t,i,a,n,s,o=Qt,c=!1){const l=this.elements,d=2*n/(t-e),g=2*n/(i-a),u=(t+e)/(t-e),p=(i+a)/(i-a);let v,S;if(c)v=n/(s-n),S=s*n/(s-n);else if(o===Qt)v=-(s+n)/(s-n),S=-2*s*n/(s-n);else if(o===Pr)v=-s/(s-n),S=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=g,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,a,n,s,o=Qt,c=!1){const l=this.elements,d=2/(t-e),g=2/(i-a),u=-(t+e)/(t-e),p=-(i+a)/(i-a);let v,S;if(c)v=1/(s-n),S=s/(s-n);else if(o===Qt)v=-2/(s-n),S=-(s+n)/(s-n);else if(o===Pr)v=-1/(s-n),S=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=g,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=v,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ko.prototype.isMatrix4=!0;let tt=Ko;const qi=new F,zt=new tt,gc=new F(0,0,0),_c=new F(1,1,1),_i=new F,Fr=new F,Ut=new F,Bs=new tt,zs=new mr;class Ai{constructor(e=0,t=0,i=0,a=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,n=a[0],s=a[4],o=a[8],c=a[1],l=a[5],d=a[9],g=a[2],u=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-g,n),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-g,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,n));break;case"ZYX":this._y=Math.asin(-Ne(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,n)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-g,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ne(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-d,p),this._y=0);break;default:be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bs,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zs.setFromEuler(this),this.setFromQuaternion(zs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class Qo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vc=0;const Hs=new F,Yi=new mr,ai=new tt,Br=new F,xr=new F,xc=new F,Mc=new mr,Gs=new F(1,0,0),Vs=new F(0,1,0),ks=new F(0,0,1),Ws={type:"added"},Sc={type:"removed"},Zi={type:"childadded",child:null},Fa={type:"childremoved",child:null};class ft extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new F,t=new Ai,i=new mr,a=new F(1,1,1);function n(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new tt},normalMatrix:{value:new Pe}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Gs,e)}rotateY(e){return this.rotateOnAxis(Vs,e)}rotateZ(e){return this.rotateOnAxis(ks,e)}translateOnAxis(e,t){return Hs.copy(e).applyQuaternion(this.quaternion),this.position.add(Hs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gs,e)}translateY(e){return this.translateOnAxis(Vs,e)}translateZ(e){return this.translateOnAxis(ks,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Br.copy(e):Br.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(xr,Br,this.up):ai.lookAt(Br,xr,this.up),this.quaternion.setFromRotationMatrix(ai),a&&(ai.extractRotation(a.matrixWorld),Yi.setFromRotationMatrix(ai),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ws),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sc),Fa.child=e,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ws),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,xc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Mc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,n=this.matrix.elements;n[12]+=t-n[0]*t-n[4]*i-n[8]*a,n[13]+=i-n[1]*t-n[5]*i-n[9]*a,n[14]+=a-n[2]*t-n[6]*i-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const g=c[l];n(e.shapes,g)}else n(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(n(e.materials,this.material[c]));a.material=o}else a.material=n(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(n(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),d=s(e.images),g=s(e.shapes),u=s(e.skeletons),p=s(e.animations),v=s(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),g.length>0&&(i.shapes=g),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=a,i;function s(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}ft.DEFAULT_UP=new F(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class sr extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yc={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,n=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),h=this._getHandJoint(l,S);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=l.joints["index-finger-tip"],g=l.joints["thumb-tip"],u=d.position.distanceTo(g.position),p=.02,v=.005;l.inputState.pinching&&u>p+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(c.matrix.fromArray(n.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,n.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(n.linearVelocity)):c.hasLinearVelocity=!1,n.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(n.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&n!==null&&(a=n),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yc)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=n!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new sr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const el={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},zr={h:0,s:0,l:0};function za(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,ze.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=ze.workingColorSpace){if(e=cc(e,1),t=Ne(t,0,1),i=Ne(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,s=2*i-n;this.r=za(s,n,e+1/3),this.g=za(s,n,e),this.b=za(s,n,e-1/3)}return ze.colorSpaceToWorking(this,a),this}setStyle(e,t=Ft){function i(n){n!==void 0&&parseFloat(n)<1&&be("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:be("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=a[1],s=n.length;if(s===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(n,16),t);be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const i=el[e.toLowerCase()];return i!==void 0?this.setHex(i,t):be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return ze.workingToColorSpace(Mt.copy(this),e),Math.round(Ne(Mt.r*255,0,255))*65536+Math.round(Ne(Mt.g*255,0,255))*256+Math.round(Ne(Mt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.workingToColorSpace(Mt.copy(this),t);const i=Mt.r,a=Mt.g,n=Mt.b,s=Math.max(i,a,n),o=Math.min(i,a,n);let c,l;const d=(o+s)/2;if(o===s)c=0,l=0;else{const g=s-o;switch(l=d<=.5?g/(s+o):g/(2-s-o),s){case i:c=(a-n)/g+(a<n?6:0);break;case a:c=(n-i)/g+2;break;case n:c=(i-a)/g+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=ze.workingColorSpace){return ze.workingToColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Ft){ze.workingToColorSpace(Mt.copy(this),e);const t=Mt.r,i=Mt.g,a=Mt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(zr);const i=Ua(vi.h,zr.h,t),a=Ua(vi.s,zr.s,t),n=Ua(vi.l,zr.l,t);return this.setHSL(i,a,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*a,this.g=n[1]*t+n[4]*i+n[7]*a,this.b=n[2]*t+n[5]*i+n[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Fe;Fe.NAMES=el;class Ec extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ht=new F,ni=new F,Ha=new F,si=new F,Ji=new F,Ki=new F,Xs=new F,Ga=new F,Va=new F,ka=new F,Wa=new st,Xa=new st,ja=new st;class Vt{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Ht.subVectors(e,t),a.cross(Ht);const n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(e,t,i,a,n){Ht.subVectors(a,t),ni.subVectors(i,t),Ha.subVectors(e,t);const s=Ht.dot(Ht),o=Ht.dot(ni),c=Ht.dot(Ha),l=ni.dot(ni),d=ni.dot(Ha),g=s*l-o*o;if(g===0)return n.set(0,0,0),null;const u=1/g,p=(l*c-o*d)*u,v=(s*d-o*c)*u;return n.set(1-p-v,v,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,i,a,n,s,o,c){return this.getBarycoord(e,t,i,a,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(n,si.x),c.addScaledVector(s,si.y),c.addScaledVector(o,si.z),c)}static getInterpolatedAttribute(e,t,i,a,n,s){return Wa.setScalar(0),Xa.setScalar(0),ja.setScalar(0),Wa.fromBufferAttribute(e,t),Xa.fromBufferAttribute(e,i),ja.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Wa,n.x),s.addScaledVector(Xa,n.y),s.addScaledVector(ja,n.z),s}static isFrontFacing(e,t,i,a){return Ht.subVectors(i,t),ni.subVectors(e,t),Ht.cross(ni).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Ht.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,n){return Vt.getInterpolation(e,this.a,this.b,this.c,t,i,a,n)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,n=this.c;let s,o;Ji.subVectors(a,i),Ki.subVectors(n,i),Ga.subVectors(e,i);const c=Ji.dot(Ga),l=Ki.dot(Ga);if(c<=0&&l<=0)return t.copy(i);Va.subVectors(e,a);const d=Ji.dot(Va),g=Ki.dot(Va);if(d>=0&&g<=d)return t.copy(a);const u=c*g-d*l;if(u<=0&&c>=0&&d<=0)return s=c/(c-d),t.copy(i).addScaledVector(Ji,s);ka.subVectors(e,n);const p=Ji.dot(ka),v=Ki.dot(ka);if(v>=0&&p<=v)return t.copy(n);const S=p*l-c*v;if(S<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(i).addScaledVector(Ki,o);const m=d*v-p*g;if(m<=0&&g-d>=0&&p-v>=0)return Xs.subVectors(n,a),o=(g-d)/(g-d+(p-v)),t.copy(a).addScaledVector(Xs,o);const h=1/(m+S+u);return s=S*h,o=u*h,t.copy(i).addScaledVector(Ji,s).addScaledVector(Ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ur{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=n.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Gt):Gt.fromBufferAttribute(n,s),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hr.copy(i.boundingBox)),Hr.applyMatrix4(e.matrixWorld),this.union(Hr)}const a=e.children;for(let n=0,s=a.length;n<s;n++)this.expandByObject(a[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),Gr.subVectors(this.max,Mr),$i.subVectors(e.a,Mr),Qi.subVectors(e.b,Mr),er.subVectors(e.c,Mr),xi.subVectors(Qi,$i),Mi.subVectors(er,Qi),Ci.subVectors($i,er);let t=[0,-xi.z,xi.y,0,-Mi.z,Mi.y,0,-Ci.z,Ci.y,xi.z,0,-xi.x,Mi.z,0,-Mi.x,Ci.z,0,-Ci.x,-xi.y,xi.x,0,-Mi.y,Mi.x,0,-Ci.y,Ci.x,0];return!qa(t,$i,Qi,er,Gr)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,$i,Qi,er,Gr))?!1:(Vr.crossVectors(xi,Mi),t=[Vr.x,Vr.y,Vr.z],qa(t,$i,Qi,er,Gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oi=[new F,new F,new F,new F,new F,new F,new F,new F],Gt=new F,Hr=new Ur,$i=new F,Qi=new F,er=new F,xi=new F,Mi=new F,Ci=new F,Mr=new F,Gr=new F,Vr=new F,Pi=new F;function qa(r,e,t,i,a){for(let n=0,s=r.length-3;n<=s;n+=3){Pi.fromArray(r,n);const o=a.x*Math.abs(Pi.x)+a.y*Math.abs(Pi.y)+a.z*Math.abs(Pi.z),c=e.dot(Pi),l=t.dot(Pi),d=i.dot(Pi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const lt=new F,kr=new He;let Tc=0;class Wt extends Gi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ls,this.updateRanges=[],this.gpuType=$t,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,n=this.itemSize;a<n;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),a=Pt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),a=Pt(a,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ls&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class tl extends Wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class il extends Wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yt extends Wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const bc=new Ur,Sr=new F,Ya=new F;class Dr{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bc.setFromPoints(e).getCenter(i);let a=0;for(let n=0,s=e.length;n<s;n++)a=Math.max(a,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Sr,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(Ya)),this.expandByPoint(Sr.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ac=0;const Ot=new tt,Za=new ft,tr=new F,Dt=new Ur,yr=new Ur,pt=new F;class wt extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nc(e)?il:tl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new Pe().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,i){return Ot.makeTranslation(e,t,i),this.applyMatrix4(Ot),this}scale(e,t,i){return Ot.makeScale(e,t,i),this.applyMatrix4(Ot),this}lookAt(e){return Za.lookAt(e),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,n=e.length;a<n;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new yt(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const n=e[a];t.setXYZ(a,n.x,n.y,n.z||0)}e.length>t.count&&be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const n=t[i];Dt.setFromBufferAttribute(n),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Dt.min,yr.min),Dt.expandByPoint(pt),pt.addVectors(Dt.max,yr.max),Dt.expandByPoint(pt)):(Dt.expandByPoint(yr.min),Dt.expandByPoint(yr.max))}Dt.getCenter(i);let a=0;for(let n=0,s=e.count;n<s;n++)pt.fromBufferAttribute(e,n),a=Math.max(a,i.distanceToSquared(pt));if(t)for(let n=0,s=t.length;n<s;n++){const o=t[n],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)pt.fromBufferAttribute(o,l),c&&(tr.fromBufferAttribute(e,l),pt.add(tr)),a=Math.max(a,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,n=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new Wt(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));const o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new F,c[_]=new F;const l=new F,d=new F,g=new F,u=new He,p=new He,v=new He,S=new F,m=new F;function h(_,E,L){l.fromBufferAttribute(i,_),d.fromBufferAttribute(i,E),g.fromBufferAttribute(i,L),u.fromBufferAttribute(n,_),p.fromBufferAttribute(n,E),v.fromBufferAttribute(n,L),d.sub(l),g.sub(l),p.sub(u),v.sub(u);const R=1/(p.x*v.y-v.x*p.y);isFinite(R)&&(S.copy(d).multiplyScalar(v.y).addScaledVector(g,-p.y).multiplyScalar(R),m.copy(g).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(R),o[_].add(S),o[E].add(S),o[L].add(S),c[_].add(m),c[E].add(m),c[L].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let _=0,E=A.length;_<E;++_){const L=A[_],R=L.start,N=L.count;for(let j=R,X=R+N;j<X;j+=3)h(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const C=new F,M=new F,b=new F,T=new F;function w(_){b.fromBufferAttribute(a,_),T.copy(b);const E=o[_];C.copy(E),C.sub(b.multiplyScalar(b.dot(E))).normalize(),M.crossVectors(T,E);const L=M.dot(c[_])<0?-1:1;s.setXYZW(_,C.x,C.y,C.z,L)}for(let _=0,E=A.length;_<E;++_){const L=A[_],R=L.start,N=L.count;for(let j=R,X=R+N;j<X;j+=3)w(e.getX(j+0)),w(e.getX(j+1)),w(e.getX(j+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const a=new F,n=new F,s=new F,o=new F,c=new F,l=new F,d=new F,g=new F;if(e)for(let u=0,p=e.count;u<p;u+=3){const v=e.getX(u+0),S=e.getX(u+1),m=e.getX(u+2);a.fromBufferAttribute(t,v),n.fromBufferAttribute(t,S),s.fromBufferAttribute(t,m),d.subVectors(s,n),g.subVectors(a,n),d.cross(g),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,m),o.add(d),c.add(d),l.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)a.fromBufferAttribute(t,u+0),n.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),d.subVectors(s,n),g.subVectors(a,n),d.cross(g),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,g=o.normalized,u=new l.constructor(c.length*d);let p=0,v=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?p=c[S]*o.data.stride+o.offset:p=c[S]*d;for(let h=0;h<d;h++)u[v++]=l[p++]}return new Wt(u,d,g)}if(this.index===null)return be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,i=this.index.array,a=this.attributes;for(const o in a){const c=a[o],l=e(c,i);t.setAttribute(o,l)}const n=this.morphAttributes;for(const o in n){const c=[],l=n[o];for(let d=0,g=l.length;d<g;d++){const u=l[d],p=e(u,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const a={};let n=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let g=0,u=l.length;g<u;g++){const p=l[g];d.push(p.toJSON(e.data))}d.length>0&&(a[c]=d,n=!0)}n&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const l in a){const d=a[l];this.setAttribute(l,d.clone(t))}const n=e.morphAttributes;for(const l in n){const d=[],g=n[l];for(let u=0,p=g.length;u<p;u++)d.push(g[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,d=s.length;l<d;l++){const g=s[l];this.addGroup(g.start,g.count,g.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let wc=0;class Vi extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=lr,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=un,this.blendDst=hn,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ps,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){be(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==un&&(i.blendSrc=this.blendSrc),this.blendDst!==hn&&(i.blendDst=this.blendDst),this.blendEquation!==Ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ps&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(n){const s=[];for(const o in n){const c=n[o];delete c.metadata,s.push(c)}return s}if(t){const n=a(e.textures),s=a(e.images);n.length>0&&(i.textures=n),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new He().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let n=0;n!==a;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const li=new F,Ja=new F,Wr=new F,Si=new F,Ka=new F,Xr=new F,$a=new F;class ps{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Ja.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(Ja);const n=e.distanceTo(t)*.5,s=-this.direction.dot(Wr),o=Si.dot(this.direction),c=-Si.dot(Wr),l=Si.lengthSq(),d=Math.abs(1-s*s);let g,u,p,v;if(d>0)if(g=s*c-o,u=s*o-c,v=n*d,g>=0)if(u>=-v)if(u<=v){const S=1/d;g*=S,u*=S,p=g*(g+s*u+2*o)+u*(s*g+u+2*c)+l}else u=n,g=Math.max(0,-(s*u+o)),p=-g*g+u*(u+2*c)+l;else u=-n,g=Math.max(0,-(s*u+o)),p=-g*g+u*(u+2*c)+l;else u<=-v?(g=Math.max(0,-(-s*n+o)),u=g>0?-n:Math.min(Math.max(-n,-c),n),p=-g*g+u*(u+2*c)+l):u<=v?(g=0,u=Math.min(Math.max(-n,-c),n),p=u*(u+2*c)+l):(g=Math.max(0,-(s*n+o)),u=g>0?n:Math.min(Math.max(-n,-c),n),p=-g*g+u*(u+2*c)+l);else u=s>0?-n:n,g=Math.max(0,-(s*u+o)),p=-g*g+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Ja).addScaledVector(Wr,u),p}intersectSphere(e,t){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),a=li.dot(li)-i*i,n=e.radius*e.radius;if(a>n)return null;const s=Math.sqrt(n-a),o=i-s,c=i+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,n,s,o,c;const l=1/this.direction.x,d=1/this.direction.y,g=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,a=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,a=(e.min.x-u.x)*l),d>=0?(n=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(n=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),i>s||n>a||((n>i||isNaN(i))&&(i=n),(s<a||isNaN(a))&&(a=s),g>=0?(o=(e.min.z-u.z)*g,c=(e.max.z-u.z)*g):(o=(e.max.z-u.z)*g,c=(e.min.z-u.z)*g),i>c||o>a)||((o>i||i!==i)&&(i=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,i,a,n){Ka.subVectors(t,e),Xr.subVectors(i,e),$a.crossVectors(Ka,Xr);let s=this.direction.dot($a),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Si.subVectors(this.origin,e);const c=o*this.direction.dot(Xr.crossVectors(Si,Xr));if(c<0)return null;const l=o*this.direction.dot(Ka.cross(Si));if(l<0||c+l>s)return null;const d=-o*Si.dot($a);return d<0?null:this.at(d/s,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rl extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=rs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const js=new tt,Li=new ps,jr=new Dr,qs=new F,qr=new F,Yr=new F,Zr=new F,Qa=new F,Jr=new F,Ys=new F,Kr=new F;class gt extends ft{constructor(e=new wt,t=new rl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=i.length;a<n;a++){const s=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,n=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(n&&o){Jr.set(0,0,0);for(let c=0,l=n.length;c<l;c++){const d=o[c],g=n[c];d!==0&&(Qa.fromBufferAttribute(g,e),s?Jr.addScaledVector(Qa,d):Jr.addScaledVector(Qa.sub(t),d))}t.add(Jr)}return t}raycast(e,t){const i=this.geometry,a=this.material,n=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(n),Li.copy(e.ray).recast(e.near),!(jr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(jr,qs)===null||Li.origin.distanceToSquared(qs)>(e.far-e.near)**2))&&(js.copy(n).invert(),Li.copy(e.ray).applyMatrix4(js),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,i){let a;const n=this.geometry,s=this.material,o=n.index,c=n.attributes.position,l=n.attributes.uv,d=n.attributes.uv1,g=n.attributes.normal,u=n.groups,p=n.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,S=u.length;v<S;v++){const m=u[v],h=s[m.materialIndex],A=Math.max(m.start,p.start),C=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,b=C;M<b;M+=3){const T=o.getX(M),w=o.getX(M+1),_=o.getX(M+2);a=$r(this,h,e,i,l,d,g,T,w,_),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const v=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=v,h=S;m<h;m+=3){const A=o.getX(m),C=o.getX(m+1),M=o.getX(m+2);a=$r(this,s,e,i,l,d,g,A,C,M),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let v=0,S=u.length;v<S;v++){const m=u[v],h=s[m.materialIndex],A=Math.max(m.start,p.start),C=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,b=C;M<b;M+=3){const T=M,w=M+1,_=M+2;a=$r(this,h,e,i,l,d,g,T,w,_),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const v=Math.max(0,p.start),S=Math.min(c.count,p.start+p.count);for(let m=v,h=S;m<h;m+=3){const A=m,C=m+1,M=m+2;a=$r(this,s,e,i,l,d,g,A,C,M),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function Rc(r,e,t,i,a,n,s,o){let c;if(e.side===bt?c=i.intersectTriangle(s,n,a,!0,o):c=i.intersectTriangle(a,n,s,e.side===bi,o),c===null)return null;Kr.copy(o),Kr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Kr);return l<t.near||l>t.far?null:{distance:l,point:Kr.clone(),object:r}}function $r(r,e,t,i,a,n,s,o,c,l){r.getVertexPosition(o,qr),r.getVertexPosition(c,Yr),r.getVertexPosition(l,Zr);const d=Rc(r,e,t,i,qr,Yr,Zr,Ys);if(d){const g=new F;Vt.getBarycoord(Ys,qr,Yr,Zr,g),a&&(d.uv=Vt.getInterpolatedAttribute(a,o,c,l,g,new He)),n&&(d.uv1=Vt.getInterpolatedAttribute(n,o,c,l,g,new He)),s&&(d.normal=Vt.getInterpolatedAttribute(s,o,c,l,g,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new F,materialIndex:0};Vt.getNormal(qr,Yr,Zr,u.normal),d.face=u,d.barycoord=g}return d}class Cc extends At{constructor(e=null,t=1,i=1,a,n,s,o,c,l=_t,d=_t,g,u){super(null,s,o,c,l,d,a,n,g,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const en=new F,Pc=new F,Lc=new Pe;class Di{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=en.subVectors(i,t).cross(Pc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(en),n=this.normal.dot(a);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Lc.getNormalMatrix(e),a=this.coplanarPoint(en).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Dr,Uc=new He(.5,.5),Qr=new F;class fs{constructor(e=new Di,t=new Di,i=new Di,a=new Di,n=new Di,s=new Di){this.planes=[e,t,i,a,n,s]}set(e,t,i,a,n,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(n),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Qt,i=!1){const a=this.planes,n=e.elements,s=n[0],o=n[1],c=n[2],l=n[3],d=n[4],g=n[5],u=n[6],p=n[7],v=n[8],S=n[9],m=n[10],h=n[11],A=n[12],C=n[13],M=n[14],b=n[15];if(a[0].setComponents(l-s,p-d,h-v,b-A).normalize(),a[1].setComponents(l+s,p+d,h+v,b+A).normalize(),a[2].setComponents(l+o,p+g,h+S,b+C).normalize(),a[3].setComponents(l-o,p-g,h-S,b-C).normalize(),i)a[4].setComponents(c,u,m,M).normalize(),a[5].setComponents(l-c,p-u,h-m,b-M).normalize();else if(a[4].setComponents(l-c,p-u,h-m,b-M).normalize(),t===Qt)a[5].setComponents(l+c,p+u,h+m,b+M).normalize();else if(t===Pr)a[5].setComponents(c,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){Ui.center.set(0,0,0);const t=Uc.distanceTo(e.center);return Ui.radius=.7071067811865476+t,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Qr.x=a.normal.x>0?e.max.x:e.min.x,Qr.y=a.normal.y>0?e.max.y:e.min.y,Qr.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class al extends Vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xa=new F,Ma=new F,Zs=new tt,Er=new ps,ea=new Dr,tn=new F,Js=new F;class Dc extends ft{constructor(e=new wt,t=new al){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,n=t.count;a<n;a++)xa.fromBufferAttribute(t,a-1),Ma.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=xa.distanceTo(Ma);e.setAttribute("lineDistance",new yt(i,1))}else be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,n=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(a),ea.radius+=n,e.ray.intersectsSphere(ea)===!1)return;Zs.copy(a).invert(),Er.copy(e.ray).applyMatrix4(Zs);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=i.index,g=i.attributes.position;if(d!==null){const u=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let v=u,S=p-1;v<S;v+=l){const m=d.getX(v),h=d.getX(v+1),A=ta(this,e,Er,c,m,h,v);A&&t.push(A)}if(this.isLineLoop){const v=d.getX(p-1),S=d.getX(u),m=ta(this,e,Er,c,v,S,p-1);m&&t.push(m)}}else{const u=Math.max(0,s.start),p=Math.min(g.count,s.start+s.count);for(let v=u,S=p-1;v<S;v+=l){const m=ta(this,e,Er,c,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){const v=ta(this,e,Er,c,p-1,u,p-1);v&&t.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=i.length;a<n;a++){const s=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function ta(r,e,t,i,a,n,s){const o=r.geometry.attributes.position;if(xa.fromBufferAttribute(o,a),Ma.fromBufferAttribute(o,n),t.distanceSqToSegment(xa,Ma,tn,Js)>i)return;tn.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(tn);if(!(c<e.near||c>e.far))return{distance:c,point:Js.clone().applyMatrix4(r.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:r}}class nl extends Vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ks=new tt,Qn=new ps,ia=new Dr,ra=new F;class Nc extends ft{constructor(e=new wt,t=new nl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,n=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ia.copy(i.boundingSphere),ia.applyMatrix4(a),ia.radius+=n,e.ray.intersectsSphere(ia)===!1)return;Ks.copy(a).invert(),Qn.copy(e.ray).applyMatrix4(Ks);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){const g=Math.max(0,s.start),u=Math.min(l.count,s.start+s.count);for(let p=g,v=u;p<v;p++){const S=l.getX(p);ra.fromBufferAttribute(d,S),$s(ra,S,c,a,e,t,this)}}else{const g=Math.max(0,s.start),u=Math.min(d.count,s.start+s.count);for(let p=g,v=u;p<v;p++)ra.fromBufferAttribute(d,p),$s(ra,p,c,a,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=i.length;a<n;a++){const s=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function $s(r,e,t,i,a,n,s){const o=Qn.distanceSqToPoint(r);if(o<t){const c=new F;Qn.closestPointToPoint(r,c),c.applyMatrix4(i);const l=a.ray.origin.distanceTo(c);if(l<a.near||l>a.far)return;n.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class sl extends At{constructor(e=[],t=Bi,i,a,n,s,o,c,l,d){super(e,t,i,a,n,s,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pr extends At{constructor(e,t,i=ii,a,n,s,o=_t,c=_t,l,d=fi,g=1){if(d!==fi&&d!==Fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:g};super(u,a,n,s,o,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ds(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ic extends pr{constructor(e,t=ii,i=Bi,a,n,s=_t,o=_t,c,l=fi){const d={width:e,height:e,depth:1},g=[d,d,d,d,d,d];super(e,e,t,i,a,n,s,o,c,l),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ol extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hi extends wt{constructor(e=1,t=1,i=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:n,depthSegments:s};const o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);const c=[],l=[],d=[],g=[];let u=0,p=0;v("z","y","x",-1,-1,i,t,e,s,n,0),v("z","y","x",1,-1,i,t,-e,s,n,1),v("x","z","y",1,1,e,i,t,a,s,2),v("x","z","y",1,-1,e,i,-t,a,s,3),v("x","y","z",1,-1,e,t,i,a,n,4),v("x","y","z",-1,-1,e,t,-i,a,n,5),this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(g,2));function v(S,m,h,A,C,M,b,T,w,_,E){const L=M/w,R=b/_,N=M/2,j=b/2,X=T/2,H=w+1,q=_+1;let k=0,J=0;const ee=new F;for(let re=0;re<q;re++){const ue=re*R-j;for(let Me=0;Me<H;Me++){const Be=Me*L-N;ee[S]=Be*A,ee[m]=ue*C,ee[h]=X,l.push(ee.x,ee.y,ee.z),ee[S]=0,ee[m]=0,ee[h]=T>0?1:-1,d.push(ee.x,ee.y,ee.z),g.push(Me/w),g.push(1-re/_),k+=1}}for(let re=0;re<_;re++)for(let ue=0;ue<w;ue++){const Me=u+ue+H*re,Be=u+ue+H*(re+1),$e=u+(ue+1)+H*(re+1),Ge=u+(ue+1)+H*re;c.push(Me,Be,Ge),c.push(Be,$e,Ge),J+=6}o.addGroup(p,J,E),p+=J,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ms extends wt{constructor(e=1,t=1,i=1,a=32,n=1,s=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:c};const l=this;a=Math.floor(a),n=Math.floor(n);const d=[],g=[],u=[],p=[];let v=0;const S=[],m=i/2;let h=0;A(),s===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(d),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(p,2));function A(){const M=new F,b=new F;let T=0;const w=(t-e)/i;for(let _=0;_<=n;_++){const E=[],L=_/n,R=L*(t-e)+e;for(let N=0;N<=a;N++){const j=N/a,X=j*c+o,H=Math.sin(X),q=Math.cos(X);b.x=R*H,b.y=-L*i+m,b.z=R*q,g.push(b.x,b.y,b.z),M.set(H,w,q).normalize(),u.push(M.x,M.y,M.z),p.push(j,1-L),E.push(v++)}S.push(E)}for(let _=0;_<a;_++)for(let E=0;E<n;E++){const L=S[E][_],R=S[E+1][_],N=S[E+1][_+1],j=S[E][_+1];(e>0||E!==0)&&(d.push(L,R,j),T+=3),(t>0||E!==n-1)&&(d.push(R,N,j),T+=3)}l.addGroup(h,T,0),h+=T}function C(M){const b=v,T=new He,w=new F;let _=0;const E=M===!0?e:t,L=M===!0?1:-1;for(let N=1;N<=a;N++)g.push(0,m*L,0),u.push(0,L,0),p.push(.5,.5),v++;const R=v;for(let N=0;N<=a;N++){const j=N/a*c+o,X=Math.cos(j),H=Math.sin(j);w.x=E*H,w.y=m*L,w.z=E*X,g.push(w.x,w.y,w.z),u.push(0,L,0),T.x=X*.5+.5,T.y=H*.5*L+.5,p.push(T.x,T.y),v++}for(let N=0;N<a;N++){const j=b+N,X=R+N;M===!0?d.push(X,X+1,j):d.push(X+1,X,j),_+=3}l.addGroup(h,_,M===!0?1:2),h+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oc{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){be("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),n=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),n+=i.distanceTo(a),t.push(n),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let a=0;const n=i.length;let s;t?s=t:s=e*i[n-1];let o=0,c=n-1,l;for(;o<=c;)if(a=Math.floor(o+(c-o)/2),l=i[a]-s,l<0)o=a+1;else if(l>0)c=a-1;else{c=a;break}if(a=c,i[a]===s)return a/(n-1);const d=i[a],g=i[a+1]-d,u=(s-d)/g;return(a+u)/(n-1)}getTangent(e,t){let i=e-1e-4,a=e+1e-4;i<0&&(i=0),a>1&&(a=1);const n=this.getPoint(i),s=this.getPoint(a),o=t||(n.isVector2?new He:new F);return o.copy(s).sub(n).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new F,a=[],n=[],s=[],o=new F,c=new tt;for(let p=0;p<=e;p++){const v=p/e;a[p]=this.getTangentAt(v,new F)}n[0]=new F,s[0]=new F;let l=Number.MAX_VALUE;const d=Math.abs(a[0].x),g=Math.abs(a[0].y),u=Math.abs(a[0].z);d<=l&&(l=d,i.set(1,0,0)),g<=l&&(l=g,i.set(0,1,0)),u<=l&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),n[0].crossVectors(a[0],o),s[0].crossVectors(a[0],n[0]);for(let p=1;p<=e;p++){if(n[p]=n[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(a[p-1],a[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Ne(a[p-1].dot(a[p]),-1,1));n[p].applyMatrix4(c.makeRotationAxis(o,v))}s[p].crossVectors(a[p],n[p])}if(t===!0){let p=Math.acos(Ne(n[0].dot(n[e]),-1,1));p/=e,a[0].dot(o.crossVectors(n[0],n[e]))>0&&(p=-p);for(let v=1;v<=e;v++)n[v].applyMatrix4(c.makeRotationAxis(a[v],p*v)),s[v].crossVectors(a[v],n[v])}return{tangents:a,normals:n,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Fc extends Oc{constructor(e=0,t=0,i=1,a=1,n=0,s=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=n,this.aEndAngle=s,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new He){const i=t,a=Math.PI*2;let n=this.aEndAngle-this.aStartAngle;const s=Math.abs(n)<Number.EPSILON;for(;n<0;)n+=a;for(;n>a;)n-=a;n<Number.EPSILON&&(s?n=0:n=a),this.aClockwise===!0&&!s&&(n===a?n=-a:n=n-a);const o=this.aStartAngle+e*n;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),g=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*d-p*g+this.aX,l=u*g+p*d+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ya extends wt{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const n=e/2,s=t/2,o=Math.floor(i),c=Math.floor(a),l=o+1,d=c+1,g=e/o,u=t/c,p=[],v=[],S=[],m=[];for(let h=0;h<d;h++){const A=h*u-s;for(let C=0;C<l;C++){const M=C*g-n;v.push(M,-A,0),S.push(0,0,1),m.push(C/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let A=0;A<o;A++){const C=A+l*h,M=A+l*(h+1),b=A+1+l*(h+1),T=A+1+l*h;p.push(C,M,T),p.push(M,b,T)}this.setIndex(p),this.setAttribute("position",new yt(v,3)),this.setAttribute("normal",new yt(S,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.widthSegments,e.heightSegments)}}class or extends wt{constructor(e=1,t=32,i=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(s+o,Math.PI);let l=0;const d=[],g=new F,u=new F,p=[],v=[],S=[],m=[];for(let h=0;h<=i;h++){const A=[],C=h/i,M=s+C*o,b=e*Math.cos(M),T=Math.sqrt(e*e-b*b);let w=0;h===0&&s===0?w=.5/t:h===i&&c===Math.PI&&(w=-.5/t);for(let _=0;_<=t;_++){const E=_/t,L=a+E*n;g.x=-T*Math.cos(L),g.y=b,g.z=T*Math.sin(L),v.push(g.x,g.y,g.z),u.copy(g).normalize(),S.push(u.x,u.y,u.z),m.push(E+w,1-C),A.push(l++)}d.push(A)}for(let h=0;h<i;h++)for(let A=0;A<t;A++){const C=d[h][A+1],M=d[h][A],b=d[h+1][A],T=d[h+1][A+1];(h!==0||s>0)&&p.push(C,M,T),(h!==i-1||c<Math.PI)&&p.push(M,b,T)}this.setIndex(p),this.setAttribute("position",new yt(v,3)),this.setAttribute("normal",new yt(S,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function fr(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const a=r[t][i];if(Qs(a))a.isRenderTargetTexture?(be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(Qs(a[0])){const n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();e[t][i]=n}else e[t][i]=a.slice();else e[t][i]=a}}return e}function Tt(r){const e={};for(let t=0;t<r.length;t++){const i=fr(r[t]);for(const a in i)e[a]=i[a]}return e}function Qs(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Bc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ll(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const zc={clone:fr,merge:Tt};var Hc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hc,this.fragmentShader=Gc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=Bc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const n=this.uniforms[a].value;n&&n.isTexture?t.uniforms[a]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[a]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[a]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[a]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[a]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[a]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[a]={type:"m4",value:n.toArray()}:t.uniforms[a]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new Fe().setHex(a.value);break;case"v2":this.uniforms[i].value=new He().fromArray(a.value);break;case"v3":this.uniforms[i].value=new F().fromArray(a.value);break;case"v4":this.uniforms[i].value=new st().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Pe().fromArray(a.value);break;case"m4":this.uniforms[i].value=new tt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Vc extends ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ir extends Vi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kn,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=rs,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kc extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wc extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cl extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const rn=new tt,eo=new F,to=new F;class Xc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Nt,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fs,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;eo.setFromMatrixPosition(e.matrixWorld),t.position.copy(eo),to.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(to),t.updateMatrixWorld(),rn.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rn,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Pr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rn)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const aa=new F,na=new mr,Yt=new F;class ul extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Qt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(aa,na,Yt),Yt.x===1&&Yt.y===1&&Yt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,na,Yt.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(aa,na,Yt),Yt.x===1&&Yt.y===1&&Yt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,na,Yt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const yi=new F,io=new He,ro=new He;class Bt extends ul{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$n*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $n*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,io,ro),t.subVectors(ro,io)}setViewOffset(e,t,i,a,n,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(La*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,n=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;n+=s.offsetX*a/c,t-=s.offsetY*i/l,a*=s.width/c,i*=s.height/l}const o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class gs extends ul{constructor(e=-1,t=1,i=1,a=-1,n=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,n,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let n=i-e,s=i+e,o=a+t,c=a-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,s=n+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(n,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jc extends Xc{constructor(){super(new gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ao extends cl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new jc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class qc extends cl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const rr=-90,ar=1;class Yc extends ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Bt(rr,ar,e,t);a.layers=this.layers,this.add(a);const n=new Bt(rr,ar,e,t);n.layers=this.layers,this.add(n);const s=new Bt(rr,ar,e,t);s.layers=this.layers,this.add(s);const o=new Bt(rr,ar,e,t);o.layers=this.layers,this.add(o);const c=new Bt(rr,ar,e,t);c.layers=this.layers,this.add(c);const l=new Bt(rr,ar,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,n,s,o,c]=t;for(const l of t)this.remove(l);if(e===Qt)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pr)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,s,o,c,l,d]=this.children,g=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,1,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(g,u,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Zc extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function no(r,e,t,i){const a=Jc(i);switch(t){case Vo:return r*e;case Wo:return r*e/a.components*a.byteLength;case os:return r*e/a.components*a.byteLength;case zi:return r*e*2/a.components*a.byteLength;case ls:return r*e*2/a.components*a.byteLength;case ko:return r*e*3/a.components*a.byteLength;case kt:return r*e*4/a.components*a.byteLength;case cs:return r*e*4/a.components*a.byteLength;case ca:case ua:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ha:case da:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yn:case Tn:return Math.max(r,16)*Math.max(e,8)/4;case Sn:case En:return Math.max(r,8)*Math.max(e,8)/2;case bn:case An:case Rn:case Cn:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wn:case fa:case Pn:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ln:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Un:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Dn:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Nn:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case In:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case On:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Fn:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Bn:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case zn:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Hn:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Gn:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Vn:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case kn:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Wn:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Xn:case jn:case qn:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Yn:case Zn:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ma:case Jn:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jc(r){switch(r){case Nt:case Bo:return{byteLength:1,components:1};case Rr:case zo:case pi:return{byteLength:2,components:1};case ns:case ss:return{byteLength:2,components:4};case ii:case as:case $t:return{byteLength:4,components:1};case Ho:case Go:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:is}}));typeof window<"u"&&(window.__THREE__?be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=is);function hl(){let r=null,e=!1,t=null,i=null;function a(n,s){t(n,s),i=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(i=r.requestAnimationFrame(a),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){r=n}}}function Kc(r){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,g=l.byteLength,u=r.createBuffer();r.bindBuffer(c,u),r.bufferData(c,l,d),o.onUploadCallback();let p;if(l instanceof Float32Array)p=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:g}}function i(o,c,l){const d=c.array,g=c.updateRanges;if(r.bindBuffer(l,o),g.length===0)r.bufferSubData(l,0,d);else{g.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<g.length;p++){const v=g[u],S=g[p];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++u,g[u]=S)}g.length=u+1;for(let p=0,v=g.length;p<v;p++){const S=g[p];r.bufferSubData(l,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:a,remove:n,update:s}}var $c=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ru=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,au=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,su=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,du=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_u=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Su=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Eu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Tu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ru="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Lu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Du=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Iu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ou=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ku=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Wu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ju=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ju=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ku=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$u=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eh=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,th=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ih=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ah=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ch=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ph=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_h=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Th=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ah=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Rh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ch=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ph=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ih=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Oh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,td=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ad=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,od=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ud=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,md=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_d=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Md=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ed=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Td=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ad=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ld=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:$c,alphahash_pars_fragment:Qc,alphamap_fragment:eu,alphamap_pars_fragment:tu,alphatest_fragment:iu,alphatest_pars_fragment:ru,aomap_fragment:au,aomap_pars_fragment:nu,batching_pars_vertex:su,batching_vertex:ou,begin_vertex:lu,beginnormal_vertex:cu,bsdfs:uu,iridescence_fragment:hu,bumpmap_pars_fragment:du,clipping_planes_fragment:pu,clipping_planes_pars_fragment:fu,clipping_planes_pars_vertex:mu,clipping_planes_vertex:gu,color_fragment:_u,color_pars_fragment:vu,color_pars_vertex:xu,color_vertex:Mu,common:Su,cube_uv_reflection_fragment:yu,defaultnormal_vertex:Eu,displacementmap_pars_vertex:Tu,displacementmap_vertex:bu,emissivemap_fragment:Au,emissivemap_pars_fragment:wu,colorspace_fragment:Ru,colorspace_pars_fragment:Cu,envmap_fragment:Pu,envmap_common_pars_fragment:Lu,envmap_pars_fragment:Uu,envmap_pars_vertex:Du,envmap_physical_pars_fragment:Wu,envmap_vertex:Nu,fog_vertex:Iu,fog_pars_vertex:Ou,fog_fragment:Fu,fog_pars_fragment:Bu,gradientmap_pars_fragment:zu,lightmap_pars_fragment:Hu,lights_lambert_fragment:Gu,lights_lambert_pars_fragment:Vu,lights_pars_begin:ku,lights_toon_fragment:Xu,lights_toon_pars_fragment:ju,lights_phong_fragment:qu,lights_phong_pars_fragment:Yu,lights_physical_fragment:Zu,lights_physical_pars_fragment:Ju,lights_fragment_begin:Ku,lights_fragment_maps:$u,lights_fragment_end:Qu,lightprobes_pars_fragment:eh,logdepthbuf_fragment:th,logdepthbuf_pars_fragment:ih,logdepthbuf_pars_vertex:rh,logdepthbuf_vertex:ah,map_fragment:nh,map_pars_fragment:sh,map_particle_fragment:oh,map_particle_pars_fragment:lh,metalnessmap_fragment:ch,metalnessmap_pars_fragment:uh,morphinstance_vertex:hh,morphcolor_vertex:dh,morphnormal_vertex:ph,morphtarget_pars_vertex:fh,morphtarget_vertex:mh,normal_fragment_begin:gh,normal_fragment_maps:_h,normal_pars_fragment:vh,normal_pars_vertex:xh,normal_vertex:Mh,normalmap_pars_fragment:Sh,clearcoat_normal_fragment_begin:yh,clearcoat_normal_fragment_maps:Eh,clearcoat_pars_fragment:Th,iridescence_pars_fragment:bh,opaque_fragment:Ah,packing:wh,premultiplied_alpha_fragment:Rh,project_vertex:Ch,dithering_fragment:Ph,dithering_pars_fragment:Lh,roughnessmap_fragment:Uh,roughnessmap_pars_fragment:Dh,shadowmap_pars_fragment:Nh,shadowmap_pars_vertex:Ih,shadowmap_vertex:Oh,shadowmask_pars_fragment:Fh,skinbase_vertex:Bh,skinning_pars_vertex:zh,skinning_vertex:Hh,skinnormal_vertex:Gh,specularmap_fragment:Vh,specularmap_pars_fragment:kh,tonemapping_fragment:Wh,tonemapping_pars_fragment:Xh,transmission_fragment:jh,transmission_pars_fragment:qh,uv_pars_fragment:Yh,uv_pars_vertex:Zh,uv_vertex:Jh,worldpos_vertex:Kh,background_vert:$h,background_frag:Qh,backgroundCube_vert:ed,backgroundCube_frag:td,cube_vert:id,cube_frag:rd,depth_vert:ad,depth_frag:nd,distance_vert:sd,distance_frag:od,equirect_vert:ld,equirect_frag:cd,linedashed_vert:ud,linedashed_frag:hd,meshbasic_vert:dd,meshbasic_frag:pd,meshlambert_vert:fd,meshlambert_frag:md,meshmatcap_vert:gd,meshmatcap_frag:_d,meshnormal_vert:vd,meshnormal_frag:xd,meshphong_vert:Md,meshphong_frag:Sd,meshphysical_vert:yd,meshphysical_frag:Ed,meshtoon_vert:Td,meshtoon_frag:bd,points_vert:Ad,points_frag:wd,shadow_vert:Rd,shadow_frag:Cd,sprite_vert:Pd,sprite_frag:Ld},ce={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},Kt={basic:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Tt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Tt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Tt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Tt([ce.points,ce.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Tt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Tt([ce.common,ce.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Tt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Tt([ce.sprite,ce.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:Tt([ce.common,ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:Tt([ce.lights,ce.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Kt.physical={uniforms:Tt([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const sa={r:0,b:0,g:0},Ud=new tt,dl=new Pe;dl.set(-1,0,0,0,1,0,0,0,1);function Dd(r,e,t,i,a,n){const s=new Fe(0);let o=a===!0?0:1,c,l,d=null,g=0,u=null;function p(A){let C=A.isScene===!0?A.background:null;if(C&&C.isTexture){const M=A.backgroundBlurriness>0;C=e.get(C,M)}return C}function v(A){let C=!1;const M=p(A);M===null?m(s,o):M&&M.isColor&&(m(M,1),C=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,n):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,n),(r.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(A,C){const M=p(C);M&&(M.isCubeTexture||M.mapping===Sa)?(l===void 0&&(l=new gt(new Hi(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:fr(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ud.makeRotationFromEuler(C.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(dl),l.material.toneMapped=ze.getTransfer(M.colorSpace)!==je,(d!==M||g!==M.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,d=M,g=M.version,u=r.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new gt(new ya(2,2),new ri({name:"BackgroundMaterial",uniforms:fr(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=ze.getTransfer(M.colorSpace)!==je,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||g!==M.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,d=M,g=M.version,u=r.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function m(A,C){A.getRGB(sa,ll(r)),t.buffers.color.setClear(sa.r,sa.g,sa.b,C,n)}function h(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(A,C=1){s.set(A),o=C,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,m(s,o)},render:v,addToRenderList:S,dispose:h}}function Nd(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},a=u(null);let n=a,s=!1;function o(R,N,j,X,H){let q=!1;const k=g(R,X,j,N);n!==k&&(n=k,l(n.object)),q=p(R,X,j,H),q&&v(R,X,j,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,M(R,N,j,X),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return r.createVertexArray()}function l(R){return r.bindVertexArray(R)}function d(R){return r.deleteVertexArray(R)}function g(R,N,j,X){const H=X.wireframe===!0;let q=i[N.id];q===void 0&&(q={},i[N.id]=q);const k=R.isInstancedMesh===!0?R.id:0;let J=q[k];J===void 0&&(J={},q[k]=J);let ee=J[j.id];ee===void 0&&(ee={},J[j.id]=ee);let re=ee[H];return re===void 0&&(re=u(c()),ee[H]=re),re}function u(R){const N=[],j=[],X=[];for(let H=0;H<t;H++)N[H]=0,j[H]=0,X[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:j,attributeDivisors:X,object:R,attributes:{},index:null}}function p(R,N,j,X){const H=n.attributes,q=N.attributes;let k=0;const J=j.getAttributes();for(const ee in J)if(J[ee].location>=0){const re=H[ee];let ue=q[ee];if(ue===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),re===void 0||re.attribute!==ue||ue&&re.data!==ue.data)return!0;k++}return n.attributesNum!==k||n.index!==X}function v(R,N,j,X){const H={},q=N.attributes;let k=0;const J=j.getAttributes();for(const ee in J)if(J[ee].location>=0){let re=q[ee];re===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const ue={};ue.attribute=re,re&&re.data&&(ue.data=re.data),H[ee]=ue,k++}n.attributes=H,n.attributesNum=k,n.index=X}function S(){const R=n.newAttributes;for(let N=0,j=R.length;N<j;N++)R[N]=0}function m(R){h(R,0)}function h(R,N){const j=n.newAttributes,X=n.enabledAttributes,H=n.attributeDivisors;j[R]=1,X[R]===0&&(r.enableVertexAttribArray(R),X[R]=1),H[R]!==N&&(r.vertexAttribDivisor(R,N),H[R]=N)}function A(){const R=n.newAttributes,N=n.enabledAttributes;for(let j=0,X=N.length;j<X;j++)N[j]!==R[j]&&(r.disableVertexAttribArray(j),N[j]=0)}function C(R,N,j,X,H,q,k){k===!0?r.vertexAttribIPointer(R,N,j,H,q):r.vertexAttribPointer(R,N,j,X,H,q)}function M(R,N,j,X){S();const H=X.attributes,q=j.getAttributes(),k=N.defaultAttributeValues;for(const J in q){const ee=q[J];if(ee.location>=0){let re=H[J];if(re===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(re=R.instanceColor)),re!==void 0){const ue=re.normalized,Me=re.itemSize,Be=e.get(re);if(Be===void 0)continue;const $e=Be.buffer,Ge=Be.type,Y=Be.bytesPerElement,ie=Ge===r.INT||Ge===r.UNSIGNED_INT||re.gpuType===as;if(re.isInterleavedBufferAttribute){const K=re.data,Se=K.stride,Ce=re.offset;if(K.isInstancedInterleavedBuffer){for(let pe=0;pe<ee.locationSize;pe++)h(ee.location+pe,K.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let pe=0;pe<ee.locationSize;pe++)m(ee.location+pe);r.bindBuffer(r.ARRAY_BUFFER,$e);for(let pe=0;pe<ee.locationSize;pe++)C(ee.location+pe,Me/ee.locationSize,Ge,ue,Se*Y,(Ce+Me/ee.locationSize*pe)*Y,ie)}else{if(re.isInstancedBufferAttribute){for(let K=0;K<ee.locationSize;K++)h(ee.location+K,re.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let K=0;K<ee.locationSize;K++)m(ee.location+K);r.bindBuffer(r.ARRAY_BUFFER,$e);for(let K=0;K<ee.locationSize;K++)C(ee.location+K,Me/ee.locationSize,Ge,ue,Me*Y,Me/ee.locationSize*K*Y,ie)}}else if(k!==void 0){const ue=k[J];if(ue!==void 0)switch(ue.length){case 2:r.vertexAttrib2fv(ee.location,ue);break;case 3:r.vertexAttrib3fv(ee.location,ue);break;case 4:r.vertexAttrib4fv(ee.location,ue);break;default:r.vertexAttrib1fv(ee.location,ue)}}}}A()}function b(){E();for(const R in i){const N=i[R];for(const j in N){const X=N[j];for(const H in X){const q=X[H];for(const k in q)d(q[k].object),delete q[k];delete X[H]}}delete i[R]}}function T(R){if(i[R.id]===void 0)return;const N=i[R.id];for(const j in N){const X=N[j];for(const H in X){const q=X[H];for(const k in q)d(q[k].object),delete q[k];delete X[H]}}delete i[R.id]}function w(R){for(const N in i){const j=i[N];for(const X in j){const H=j[X];if(H[R.id]===void 0)continue;const q=H[R.id];for(const k in q)d(q[k].object),delete q[k];delete H[R.id]}}}function _(R){for(const N in i){const j=i[N],X=R.isInstancedMesh===!0?R.id:0,H=j[X];if(H!==void 0){for(const q in H){const k=H[q];for(const J in k)d(k[J].object),delete k[J];delete H[q]}delete j[X],Object.keys(j).length===0&&delete i[N]}}}function E(){L(),s=!0,n!==a&&(n=a,l(n.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:E,resetDefaultState:L,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:m,disableUnusedAttributes:A}}function Id(r,e,t){let i;function a(c){i=c}function n(c,l){r.drawArrays(i,c,l),t.update(l,i,1)}function s(c,l,d){d!==0&&(r.drawArraysInstanced(i,c,l,d),t.update(l,i,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,d);let g=0;for(let u=0;u<d;u++)g+=l[u];t.update(g,i,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function Od(r,e,t,i){let a;function n(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(w){return!(w!==kt&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const _=w===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Nt&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==$t&&!_)}function c(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(be("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const g=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),h=r.getParameter(r.MAX_VERTEX_ATTRIBS),A=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:g,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:M,maxSamples:b,samples:T}}function Fd(r){const e=this;let t=null,i=0,a=!1,n=!1;const s=new Di,o=new Pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(g,u){const p=g.length!==0||u||i!==0||a;return a=u,i=g.length,p},this.beginShadows=function(){n=!0,d(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(g,u){t=d(g,u,0)},this.setState=function(g,u,p){const v=g.clippingPlanes,S=g.clipIntersection,m=g.clipShadows,h=r.get(g);if(!a||v===null||v.length===0||n&&!m)n?d(null):l();else{const A=n?0:i,C=A*4;let M=h.clippingState||null;c.value=M,M=d(v,u,C,p);for(let b=0;b!==C;++b)M[b]=t[b];h.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(g,u,p,v){const S=g!==null?g.length:0;let m=null;if(S!==0){if(m=c.value,v!==!0||m===null){const h=p+S*4,A=u.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<h)&&(m=new Float32Array(h));for(let C=0,M=p;C!==S;++C,M+=4)s.copy(g[C]).applyMatrix4(A,o),s.normal.toArray(m,M),m[M+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const Ti=4,so=[.125,.215,.35,.446,.526,.582],Ii=20,Bd=256,Tr=new gs,oo=new Fe;let an=null,nn=0,sn=0,on=!1;const zd=new F;class lo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,n={}){const{size:s=256,position:o=zd}=n;an=this._renderer.getRenderTarget(),nn=this._renderer.getActiveCubeFace(),sn=this._renderer.getActiveMipmapLevel(),on=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,a,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ho(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(an,nn,sn),this._renderer.xr.enabled=on,e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),an=this._renderer.getRenderTarget(),nn=this._renderer.getActiveCubeFace(),sn=this._renderer.getActiveMipmapLevel(),on=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:St,minFilter:St,generateMipmaps:!1,type:pi,format:kt,colorSpace:ga,depthBuffer:!1},a=co(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=co(e,t,i);const{_lodMax:n}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Hd(n)),this._blurMaterial=Vd(n,e,t),this._ggxMaterial=Gd(n,e,t)}return a}_compileMaterial(e){const t=new gt(new wt,e);this._renderer.compile(t,Tr)}_sceneToCubeUV(e,t,i,a,n){const s=new Bt(90,1,t,i),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,d=l.autoClear,g=l.toneMapping;l.getClearColor(oo),l.toneMapping=ei,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(a),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gt(new Hi,new rl({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1})));const u=this._backgroundBox,p=u.material;let v=!1;const S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,v=!0):(p.color.copy(oo),v=!0);for(let m=0;m<6;m++){const h=m%3;h===0?(s.up.set(0,o[m],0),s.position.set(n.x,n.y,n.z),s.lookAt(n.x+c[m],n.y,n.z)):h===1?(s.up.set(0,0,o[m]),s.position.set(n.x,n.y,n.z),s.lookAt(n.x,n.y+c[m],n.z)):(s.up.set(0,o[m],0),s.position.set(n.x,n.y,n.z),s.lookAt(n.x,n.y,n.z+c[m]));const A=this._cubeSize;nr(a,h*A,m>2?A:0,A,A),l.setRenderTarget(a),v&&l.render(u,s),l.render(e,s)}l.toneMapping=g,l.autoClear=d,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Bi||e.mapping===dr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ho()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uo());const n=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=n;const o=n.uniforms;o.envMap.value=e;const c=this._cubeSize;nr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,Tr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let n=1;n<a;n++)this._applyGGXFilter(e,n-1,n);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,n=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const c=s.uniforms,l=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),g=Math.sqrt(l*l-d*d),u=0+l*1.25,p=g*u,{_lodMax:v}=this,S=this._sizeLods[i],m=3*S*(i>v-Ti?i-v+Ti:0),h=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=v-t,nr(n,m,h,3*S,2*S),a.setRenderTarget(n),a.render(o,Tr),c.envMap.value=n.texture,c.roughness.value=0,c.mipInt.value=v-i,nr(e,m,h,3*S,2*S),a.setRenderTarget(e),a.render(o,Tr)}_blur(e,t,i,a,n){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,a,"latitudinal",n),this._halfBlur(s,e,i,i,a,"longitudinal",n)}_halfBlur(e,t,i,a,n,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&ke("blur direction must be either latitudinal or longitudinal!");const d=3,g=this._lodMeshes[a];g.material=l;const u=l.uniforms,p=this._sizeLods[i]-1,v=isFinite(n)?Math.PI/(2*p):2*Math.PI/(2*Ii-1),S=n/v,m=isFinite(n)?1+Math.floor(d*S):Ii;m>Ii&&be(`sigmaRadians, ${n}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);const h=[];let A=0;for(let w=0;w<Ii;++w){const _=w/S,E=Math.exp(-_*_/2);h.push(E),w===0?A+=E:w<m&&(A+=2*E)}for(let w=0;w<h.length;w++)h[w]=h[w]/A;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:C}=this;u.dTheta.value=v,u.mipInt.value=C-i;const M=this._sizeLods[a],b=3*M*(a>C-Ti?a-C+Ti:0),T=4*(this._cubeSize-M);nr(t,b,T,3*M,2*M),c.setRenderTarget(t),c.render(g,Tr)}}function Hd(r){const e=[],t=[],i=[];let a=r;const n=r-Ti+1+so.length;for(let s=0;s<n;s++){const o=Math.pow(2,a);e.push(o);let c=1/o;s>r-Ti?c=so[s-r+Ti-1]:s===0&&(c=0),t.push(c);const l=1/(o-2),d=-l,g=1+l,u=[d,d,g,d,g,g,d,d,g,g,d,g],p=6,v=6,S=3,m=2,h=1,A=new Float32Array(S*v*p),C=new Float32Array(m*v*p),M=new Float32Array(h*v*p);for(let T=0;T<p;T++){const w=T%3*2/3-1,_=T>2?0:-1,E=[w,_,0,w+2/3,_,0,w+2/3,_+1,0,w,_,0,w+2/3,_+1,0,w,_+1,0];A.set(E,S*v*T),C.set(u,m*v*T);const L=[T,T,T,T,T,T];M.set(L,h*v*T)}const b=new wt;b.setAttribute("position",new Wt(A,S)),b.setAttribute("uv",new Wt(C,m)),b.setAttribute("faceIndex",new Wt(M,h)),i.push(new gt(b,null)),a>Ti&&a--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function co(r,e,t){const i=new ti(r,e,t);return i.texture.mapping=Sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nr(r,e,t,i,a){r.viewport.set(e,t,i,a),r.scissor.set(e,t,i,a)}function Gd(r,e,t){return new ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bd,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ea(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Vd(r,e,t){const i=new Float32Array(Ii),a=new F(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function uo(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function ho(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Ea(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class pl extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new sl(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Hi(5,5,5),n=new ri({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bt,blending:hi});n.uniforms.tEquirect.value=t;const s=new gt(a,n),o=t.minFilter;return t.minFilter===Oi&&(t.minFilter=St),new Yc(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,a);e.setRenderTarget(n)}}function kd(r){let e=new WeakMap,t=new WeakMap,i=null;function a(u,p=!1){return u==null?null:p?s(u):n(u)}function n(u){if(u&&u.isTexture){const p=u.mapping;if(p===Ra||p===Ca)if(e.has(u)){const v=e.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const S=new pl(v.height);return S.fromEquirectangularTexture(r,u),e.set(u,S),u.addEventListener("dispose",l),o(S.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){const p=u.mapping,v=p===Ra||p===Ca,S=p===Bi||p===dr;if(v||S){let m=t.get(u);const h=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new lo(r)),m=v?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const A=u.image;return v&&A&&A.height>0||S&&A&&c(A)?(i===null&&(i=new lo(r)),m=v?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,p){return p===Ra?u.mapping=Bi:p===Ca&&(u.mapping=dr),u}function c(u){let p=0;const v=6;for(let S=0;S<v;S++)u[S]!==void 0&&p++;return p===v}function l(u){const p=u.target;p.removeEventListener("dispose",l);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function g(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:g}}function Wd(r){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=r.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&cr("WebGLRenderer: "+i+" extension not supported."),a}}}function Xd(r,e,t,i){const a={},n=new WeakMap;function s(g){const u=g.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",s),delete a[u.id];const p=n.get(u);p&&(e.remove(p),n.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(g,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,t.memory.geometries++),u}function c(g){const u=g.attributes;for(const p in u)e.update(u[p],r.ARRAY_BUFFER)}function l(g){const u=[],p=g.index,v=g.attributes.position;let S=0;if(v===void 0)return;if(p!==null){const A=p.array;S=p.version;for(let C=0,M=A.length;C<M;C+=3){const b=A[C+0],T=A[C+1],w=A[C+2];u.push(b,T,T,w,w,b)}}else{const A=v.array;S=v.version;for(let C=0,M=A.length/3-1;C<M;C+=3){const b=C+0,T=C+1,w=C+2;u.push(b,T,T,w,w,b)}}const m=new(v.count>=65535?il:tl)(u,1);m.version=S;const h=n.get(g);h&&e.remove(h),n.set(g,m)}function d(g){const u=n.get(g);if(u){const p=g.index;p!==null&&u.version<p.version&&l(g)}else l(g);return n.get(g)}return{get:o,update:c,getWireframeAttribute:d}}function jd(r,e,t){let i;function a(g){i=g}let n,s;function o(g){n=g.type,s=g.bytesPerElement}function c(g,u){r.drawElements(i,u,n,g*s),t.update(u,i,1)}function l(g,u,p){p!==0&&(r.drawElementsInstanced(i,u,n,g*s,p),t.update(u,i,p))}function d(g,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,n,g,0,p);let v=0;for(let S=0;S<p;S++)v+=u[S];t.update(v,i,1)}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function qd(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,s,o){switch(t.calls++,s){case r.TRIANGLES:t.triangles+=o*(n/3);break;case r.LINES:t.lines+=o*(n/2);break;case r.LINE_STRIP:t.lines+=o*(n-1);break;case r.LINE_LOOP:t.lines+=o*n;break;case r.POINTS:t.points+=o*n;break;default:ke("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function Yd(r,e,t){const i=new WeakMap,a=new st;function n(s,o,c){const l=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==g){let p=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",p)};u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),m===!0&&(M=3);let b=o.attributes.position.count*M,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*T*4*g),_=new Jo(w,b,T,g);_.type=$t,_.needsUpdate=!0;const E=M*4;for(let L=0;L<g;L++){const R=h[L],N=A[L],j=C[L],X=b*T*4*L;for(let H=0;H<R.count;H++){const q=H*E;v===!0&&(a.fromBufferAttribute(R,H),w[X+q+0]=a.x,w[X+q+1]=a.y,w[X+q+2]=a.z,w[X+q+3]=0),S===!0&&(a.fromBufferAttribute(N,H),w[X+q+4]=a.x,w[X+q+5]=a.y,w[X+q+6]=a.z,w[X+q+7]=0),m===!0&&(a.fromBufferAttribute(j,H),w[X+q+8]=a.x,w[X+q+9]=a.y,w[X+q+10]=a.z,w[X+q+11]=j.itemSize===4?a.w:1)}}u={count:g,texture:_,size:new He(b,T)},i.set(o,u),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let p=0;for(let S=0;S<l.length;S++)p+=l[S];const v=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(r,"morphTargetBaseInfluence",v),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:n}}function Zd(r,e,t,i,a){let n=new WeakMap;function s(l){const d=a.render.frame,g=l.geometry,u=e.get(l,g);if(n.get(u)!==d&&(e.update(u),n.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),n.get(l)!==d&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,d))),l.isSkinnedMesh){const p=l.skeleton;n.get(p)!==d&&(p.update(),n.set(p,d))}return u}function o(){n=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}const Jd={[Po]:"LINEAR_TONE_MAPPING",[Lo]:"REINHARD_TONE_MAPPING",[Uo]:"CINEON_TONE_MAPPING",[Do]:"ACES_FILMIC_TONE_MAPPING",[Io]:"AGX_TONE_MAPPING",[Oo]:"NEUTRAL_TONE_MAPPING",[No]:"CUSTOM_TONE_MAPPING"};function Kd(r,e,t,i,a,n){const s=new ti(e,t,{type:r,depthBuffer:a,stencilBuffer:n,samples:i?4:0,depthTexture:a?new pr(e,t):void 0}),o=new ti(e,t,{type:pi,depthBuffer:!1,stencilBuffer:!1}),c=new wt;c.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new yt([0,2,0,0,2,0],2));const l=new Vc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new gt(c,l),g=new gs(-1,1,1,-1,0,1);let u=null,p=null,v=!1,S,m=null,h=[],A=!1;this.setSize=function(C,M){s.setSize(C,M),o.setSize(C,M);for(let b=0;b<h.length;b++){const T=h[b];T.setSize&&T.setSize(C,M)}},this.setEffects=function(C){h=C,A=h.length>0&&h[0].isRenderPass===!0;const M=s.width,b=s.height;for(let T=0;T<h.length;T++){const w=h[T];w.setSize&&w.setSize(M,b)}},this.begin=function(C,M){if(v||C.toneMapping===ei&&h.length===0)return!1;if(m=M,M!==null){const b=M.width,T=M.height;(s.width!==b||s.height!==T)&&this.setSize(b,T)}return A===!1&&C.setRenderTarget(s),S=C.toneMapping,C.toneMapping=ei,!0},this.hasRenderPass=function(){return A},this.end=function(C,M){C.toneMapping=S,v=!0;let b=s,T=o;for(let w=0;w<h.length;w++){const _=h[w];if(_.enabled!==!1&&(_.render(C,T,b,M),_.needsSwap!==!1)){const E=b;b=T,T=E}}if(u!==C.outputColorSpace||p!==C.toneMapping){u=C.outputColorSpace,p=C.toneMapping,l.defines={},ze.getTransfer(u)===je&&(l.defines.SRGB_TRANSFER="");const w=Jd[p];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,C.setRenderTarget(m),C.render(d,g),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),c.dispose(),l.dispose()}}const fl=new At,es=new pr(1,1),ml=new Jo,gl=new mc,_l=new sl,po=[],fo=[],mo=new Float32Array(16),go=new Float32Array(9),_o=new Float32Array(4);function gr(r,e,t){const i=r[0];if(i<=0||i>0)return r;const a=e*t;let n=po[a];if(n===void 0&&(n=new Float32Array(a),po[a]=n),e!==0){i.toArray(n,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(n,o)}return n}function ut(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function ht(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Ta(r,e){let t=fo[e];t===void 0&&(t=new Int32Array(e),fo[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function $d(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Qd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;r.uniform2fv(this.addr,e),ht(t,e)}}function ep(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;r.uniform3fv(this.addr,e),ht(t,e)}}function tp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;r.uniform4fv(this.addr,e),ht(t,e)}}function ip(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;_o.set(i),r.uniformMatrix2fv(this.addr,!1,_o),ht(t,i)}}function rp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;go.set(i),r.uniformMatrix3fv(this.addr,!1,go),ht(t,i)}}function ap(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;mo.set(i),r.uniformMatrix4fv(this.addr,!1,mo),ht(t,i)}}function np(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function sp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;r.uniform2iv(this.addr,e),ht(t,e)}}function op(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;r.uniform3iv(this.addr,e),ht(t,e)}}function lp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;r.uniform4iv(this.addr,e),ht(t,e)}}function cp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function up(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;r.uniform2uiv(this.addr,e),ht(t,e)}}function hp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;r.uniform3uiv(this.addr,e),ht(t,e)}}function dp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;r.uniform4uiv(this.addr,e),ht(t,e)}}function pp(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a);let n;this.type===r.SAMPLER_2D_SHADOW?(es.compareFunction=t.isReversedDepthBuffer()?hs:us,n=es):n=fl,t.setTexture2D(e||n,a)}function fp(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||gl,a)}function mp(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||_l,a)}function gp(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||ml,a)}function _p(r){switch(r){case 5126:return $d;case 35664:return Qd;case 35665:return ep;case 35666:return tp;case 35674:return ip;case 35675:return rp;case 35676:return ap;case 5124:case 35670:return np;case 35667:case 35671:return sp;case 35668:case 35672:return op;case 35669:case 35673:return lp;case 5125:return cp;case 36294:return up;case 36295:return hp;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return pp;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return mp;case 36289:case 36303:case 36311:case 36292:return gp}}function vp(r,e){r.uniform1fv(this.addr,e)}function xp(r,e){const t=gr(e,this.size,2);r.uniform2fv(this.addr,t)}function Mp(r,e){const t=gr(e,this.size,3);r.uniform3fv(this.addr,t)}function Sp(r,e){const t=gr(e,this.size,4);r.uniform4fv(this.addr,t)}function yp(r,e){const t=gr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ep(r,e){const t=gr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Tp(r,e){const t=gr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function bp(r,e){r.uniform1iv(this.addr,e)}function Ap(r,e){r.uniform2iv(this.addr,e)}function wp(r,e){r.uniform3iv(this.addr,e)}function Rp(r,e){r.uniform4iv(this.addr,e)}function Cp(r,e){r.uniform1uiv(this.addr,e)}function Pp(r,e){r.uniform2uiv(this.addr,e)}function Lp(r,e){r.uniform3uiv(this.addr,e)}function Up(r,e){r.uniform4uiv(this.addr,e)}function Dp(r,e,t){const i=this.cache,a=e.length,n=Ta(t,a);ut(i,n)||(r.uniform1iv(this.addr,n),ht(i,n));let s;this.type===r.SAMPLER_2D_SHADOW?s=es:s=fl;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||s,n[o])}function Np(r,e,t){const i=this.cache,a=e.length,n=Ta(t,a);ut(i,n)||(r.uniform1iv(this.addr,n),ht(i,n));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||gl,n[s])}function Ip(r,e,t){const i=this.cache,a=e.length,n=Ta(t,a);ut(i,n)||(r.uniform1iv(this.addr,n),ht(i,n));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||_l,n[s])}function Op(r,e,t){const i=this.cache,a=e.length,n=Ta(t,a);ut(i,n)||(r.uniform1iv(this.addr,n),ht(i,n));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||ml,n[s])}function Fp(r){switch(r){case 5126:return vp;case 35664:return xp;case 35665:return Mp;case 35666:return Sp;case 35674:return yp;case 35675:return Ep;case 35676:return Tp;case 5124:case 35670:return bp;case 35667:case 35671:return Ap;case 35668:case 35672:return wp;case 35669:case 35673:return Rp;case 5125:return Cp;case 36294:return Pp;case 36295:return Lp;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Ip;case 36289:case 36303:case 36311:case 36292:return Op}}class Bp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_p(t.type)}}class zp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fp(t.type)}}class Hp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let n=0,s=a.length;n!==s;++n){const o=a[n];o.setValue(e,t[o.id],i)}}}const ln=/(\w+)(\])?(\[|\.)?/g;function vo(r,e){r.seq.push(e),r.map[e.id]=e}function Gp(r,e,t){const i=r.name,a=i.length;for(ln.lastIndex=0;;){const n=ln.exec(i),s=ln.lastIndex;let o=n[1];const c=n[2]==="]",l=n[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===a){vo(t,l===void 0?new Bp(o,r,e):new zp(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Hp(o),vo(t,d)),t=d}}}class pa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),c=e.getUniformLocation(t,o.name);Gp(o,c,this)}const a=[],n=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):n.push(s);a.length>0&&(this.seq=a.concat(n))}setValue(e,t,i,a){const n=this.map[t];n!==void 0&&n.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let n=0,s=t.length;n!==s;++n){const o=t[n],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,n=e.length;a!==n;++a){const s=e[a];s.id in t&&i.push(s)}return i}}function xo(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Vp=37297;let kp=0;function Wp(r,e){const t=r.split(`
`),i=[],a=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let s=a;s<n;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Mo=new Pe;function Xp(r){ze._getMatrix(Mo,ze.workingColorSpace,r);const e=`mat3( ${Mo.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(r)){case _a:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return be("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function So(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),a=(r.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const n=/ERROR: 0:(\d+)/.exec(a);if(n){const s=parseInt(n[1]);return t.toUpperCase()+`

`+a+`

`+Wp(r.getShaderSource(e),s)}else return a}function jp(r,e){const t=Xp(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const qp={[Po]:"Linear",[Lo]:"Reinhard",[Uo]:"Cineon",[Do]:"ACESFilmic",[Io]:"AgX",[Oo]:"Neutral",[No]:"Custom"};function Yp(r,e){const t=qp[e];return t===void 0?(be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const oa=new F;function Zp(){ze.getLuminanceCoefficients(oa);const r=oa.x.toFixed(4),e=oa.y.toFixed(4),t=oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jp(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function Kp(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $p(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const n=r.getActiveAttrib(e,a),s=n.name;let o=1;n.type===r.FLOAT_MAT2&&(o=2),n.type===r.FLOAT_MAT3&&(o=3),n.type===r.FLOAT_MAT4&&(o=4),t[s]={type:n.type,location:r.getAttribLocation(e,s),locationSize:o}}return t}function wr(r){return r!==""}function yo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eo(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ts(r){return r.replace(Qp,tf)}const ef=new Map;function tf(r,e){let t=Ue[e];if(t===void 0){const i=ef.get(e);if(i!==void 0)t=Ue[i],be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ts(t)}const rf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function To(r){return r.replace(rf,af)}function af(r,e,t,i){let a="";for(let n=parseInt(e);n<parseInt(t);n++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function bo(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const nf={[la]:"SHADOWMAP_TYPE_PCF",[Ar]:"SHADOWMAP_TYPE_VSM"};function sf(r){return nf[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const of={[Bi]:"ENVMAP_TYPE_CUBE",[dr]:"ENVMAP_TYPE_CUBE",[Sa]:"ENVMAP_TYPE_CUBE_UV"};function lf(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":of[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const cf={[dr]:"ENVMAP_MODE_REFRACTION"};function uf(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":cf[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hf={[rs]:"ENVMAP_BLENDING_MULTIPLY",[Yl]:"ENVMAP_BLENDING_MIX",[Zl]:"ENVMAP_BLENDING_ADD"};function df(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":hf[r.combine]||"ENVMAP_BLENDING_NONE"}function pf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ff(r,e,t,i){const a=r.getContext(),n=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=sf(t),l=lf(t),d=uf(t),g=df(t),u=pf(t),p=Jp(t),v=Kp(n),S=a.createProgram();let m,h,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(wr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(wr).join(`
`),h.length>0&&(h+=`
`)):(m=[bo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),h=[bo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+g:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?Ue.tonemapping_pars_fragment:"",t.toneMapping!==ei?Yp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,jp("linearToOutputTexel",t.outputColorSpace),Zp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),s=ts(s),s=yo(s,t),s=Eo(s,t),o=ts(o),o=yo(o,t),o=Eo(o,t),s=To(s),o=To(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Us?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Us?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const C=A+m+s,M=A+h+o,b=xo(a,a.VERTEX_SHADER,C),T=xo(a,a.FRAGMENT_SHADER,M);a.attachShader(S,b),a.attachShader(S,T),t.index0AttributeName!==void 0?a.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(S,0,"position"),a.linkProgram(S);function w(R){if(r.debug.checkShaderErrors){const N=a.getProgramInfoLog(S)||"",j=a.getShaderInfoLog(b)||"",X=a.getShaderInfoLog(T)||"",H=N.trim(),q=j.trim(),k=X.trim();let J=!0,ee=!0;if(a.getProgramParameter(S,a.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,S,b,T);else{const re=So(a,b,"vertex"),ue=So(a,T,"fragment");ke("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(S,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+re+`
`+ue)}else H!==""?be("WebGLProgram: Program Info Log:",H):(q===""||k==="")&&(ee=!1);ee&&(R.diagnostics={runnable:J,programLog:H,vertexShader:{log:q,prefix:m},fragmentShader:{log:k,prefix:h}})}a.deleteShader(b),a.deleteShader(T),_=new pa(a,S),E=$p(a,S)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=a.getProgramParameter(S,Vp)),L},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kp++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=T,this}let mf=0;class gf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _f(e),t.set(e,i)),i}}class _f{constructor(e){this.id=mf++,this.code=e,this.usedTimes=0}}function vf(r){return r===zi||r===fa||r===ma}function xf(r,e,t,i,a,n){const s=new Qo,o=new gf,c=new Set,l=[],d=new Map,g=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function S(_,E,L,R,N,j){const X=R.fog,H=N.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,J=e.get(_.envMap||q,k),ee=J&&J.mapping===Sa?J.image.height:null,re=p[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&be("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const ue=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Me=ue!==void 0?ue.length:0;let Be=0;H.morphAttributes.position!==void 0&&(Be=1),H.morphAttributes.normal!==void 0&&(Be=2),H.morphAttributes.color!==void 0&&(Be=3);let $e,Ge,Y,ie;if(re){const fe=Kt[re];$e=fe.vertexShader,Ge=fe.fragmentShader}else{$e=_.vertexShader,Ge=_.fragmentShader;const fe=o.getVertexShaderStage(_),Et=o.getFragmentShaderStage(_);o.update(_,fe,Et),Y=fe.id,ie=Et.id}const K=r.getRenderTarget(),Se=r.state.buffers.depth.getReversed(),Ce=N.isInstancedMesh===!0,pe=N.isBatchedMesh===!0,Ve=!!_.map,We=!!_.matcap,Ie=!!J,Qe=!!_.aoMap,Rt=!!_.lightMap,vt=!!_.bumpMap&&_.wireframe===!1,ct=!!_.normalMap,dt=!!_.displacementMap,mt=!!_.emissiveMap,it=!!_.metalnessMap,ot=!!_.roughnessMap,U=_.anisotropy>0,Ct=_.clearcoat>0,Xe=_.dispersion>0,y=_.iridescence>0,f=_.sheen>0,O=_.transmission>0,G=U&&!!_.anisotropyMap,W=Ct&&!!_.clearcoatMap,se=Ct&&!!_.clearcoatNormalMap,le=Ct&&!!_.clearcoatRoughnessMap,D=y&&!!_.iridescenceMap,ne=y&&!!_.iridescenceThicknessMap,oe=f&&!!_.sheenColorMap,ve=f&&!!_.sheenRoughnessMap,Q=!!_.specularMap,we=!!_.specularColorMap,Ee=!!_.specularIntensityMap,Re=O&&!!_.transmissionMap,Le=O&&!!_.thicknessMap,P=!!_.gradientMap,Z=!!_.alphaMap,te=_.alphaTest>0,de=!!_.alphaHash,me=!!_.extensions;let $=ei;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&($=r.toneMapping);const ye={shaderID:re,shaderType:_.type,shaderName:_.name,vertexShader:$e,fragmentShader:Ge,defines:_.defines,customVertexShaderID:Y,customFragmentShaderID:ie,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:pe,batchingColor:pe&&N._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&N.instanceColor!==null,instancingMorph:Ce&&N.morphTexture!==null,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ve,matcap:We,envMap:Ie,envMapMode:Ie&&J.mapping,envMapCubeUVHeight:ee,aoMap:Qe,lightMap:Rt,bumpMap:vt,normalMap:ct,displacementMap:dt,emissiveMap:mt,normalMapObjectSpace:ct&&_.normalMapType===$l,normalMapTangentSpace:ct&&_.normalMapType===Kn,packedNormalMap:ct&&_.normalMapType===Kn&&vf(_.normalMap.format),metalnessMap:it,roughnessMap:ot,anisotropy:U,anisotropyMap:G,clearcoat:Ct,clearcoatMap:W,clearcoatNormalMap:se,clearcoatRoughnessMap:le,dispersion:Xe,iridescence:y,iridescenceMap:D,iridescenceThicknessMap:ne,sheen:f,sheenColorMap:oe,sheenRoughnessMap:ve,specularMap:Q,specularColorMap:we,specularIntensityMap:Ee,transmission:O,transmissionMap:Re,thicknessMap:Le,gradientMap:P,opaque:_.transparent===!1&&_.blending===lr&&_.alphaToCoverage===!1,alphaMap:Z,alphaTest:te,alphaHash:de,combine:_.combine,mapUv:Ve&&v(_.map.channel),aoMapUv:Qe&&v(_.aoMap.channel),lightMapUv:Rt&&v(_.lightMap.channel),bumpMapUv:vt&&v(_.bumpMap.channel),normalMapUv:ct&&v(_.normalMap.channel),displacementMapUv:dt&&v(_.displacementMap.channel),emissiveMapUv:mt&&v(_.emissiveMap.channel),metalnessMapUv:it&&v(_.metalnessMap.channel),roughnessMapUv:ot&&v(_.roughnessMap.channel),anisotropyMapUv:G&&v(_.anisotropyMap.channel),clearcoatMapUv:W&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:D&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(_.sheenRoughnessMap.channel),specularMapUv:Q&&v(_.specularMap.channel),specularColorMapUv:we&&v(_.specularColorMap.channel),specularIntensityMapUv:Ee&&v(_.specularIntensityMap.channel),transmissionMapUv:Re&&v(_.transmissionMap.channel),thicknessMapUv:Le&&v(_.thicknessMap.channel),alphaMapUv:Z&&v(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ct||U),vertexNormals:!!H.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(Ve||Z),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||H.attributes.normal===void 0&&ct===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Se,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Be,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:$,decodeVideoTexture:Ve&&_.map.isVideoTexture===!0&&ze.getTransfer(_.map.colorSpace)===je,decodeVideoTextureEmissive:mt&&_.emissiveMap.isVideoTexture===!0&&ze.getTransfer(_.emissiveMap.colorSpace)===je,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ci,flipSided:_.side===bt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&_.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function m(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)E.push(L),E.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(h(E,_),A(E,_),E.push(r.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function h(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function A(_,E){s.disableAll(),E.instancing&&s.enable(0),E.instancingColor&&s.enable(1),E.instancingMorph&&s.enable(2),E.matcap&&s.enable(3),E.envMap&&s.enable(4),E.normalMapObjectSpace&&s.enable(5),E.normalMapTangentSpace&&s.enable(6),E.clearcoat&&s.enable(7),E.iridescence&&s.enable(8),E.alphaTest&&s.enable(9),E.vertexColors&&s.enable(10),E.vertexAlphas&&s.enable(11),E.vertexUv1s&&s.enable(12),E.vertexUv2s&&s.enable(13),E.vertexUv3s&&s.enable(14),E.vertexTangents&&s.enable(15),E.anisotropy&&s.enable(16),E.alphaHash&&s.enable(17),E.batching&&s.enable(18),E.dispersion&&s.enable(19),E.batchingColor&&s.enable(20),E.gradientMap&&s.enable(21),E.packedNormalMap&&s.enable(22),E.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.reversedDepthBuffer&&s.enable(4),E.skinning&&s.enable(5),E.morphTargets&&s.enable(6),E.morphNormals&&s.enable(7),E.morphColors&&s.enable(8),E.premultipliedAlpha&&s.enable(9),E.shadowMapEnabled&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.transmission&&s.enable(15),E.sheen&&s.enable(16),E.opaque&&s.enable(17),E.pointsUvs&&s.enable(18),E.decodeVideoTexture&&s.enable(19),E.decodeVideoTextureEmissive&&s.enable(20),E.alphaToCoverage&&s.enable(21),E.numLightProbeGrids>0&&s.enable(22),E.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function C(_){const E=p[_.type];let L;if(E){const R=Kt[E];L=zc.clone(R.uniforms)}else L=_.uniforms;return L}function M(_,E){let L=d.get(E);return L!==void 0?++L.usedTimes:(L=new ff(r,E,_,a),l.push(L),d.set(E,L)),L}function b(_){if(--_.usedTimes===0){const E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),d.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function w(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:C,acquireProgram:M,releaseProgram:b,releaseShaderCache:T,programs:l,dispose:w}}function Mf(){let r=new WeakMap;function e(s){return r.has(s)}function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function i(s){r.delete(s)}function a(s,o,c){r.get(s)[o]=c}function n(){r=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:n}}function Sf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Ao(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function wo(){const r=[];let e=0;const t=[],i=[],a=[];function n(){e=0,t.length=0,i.length=0,a.length=0}function s(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,v,S,m,h){let A=r[e];return A===void 0?(A={id:u.id,object:u,geometry:p,material:v,materialVariant:s(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:h},r[e]=A):(A.id=u.id,A.object=u,A.geometry=p,A.material=v,A.materialVariant=s(u),A.groupOrder=S,A.renderOrder=u.renderOrder,A.z=m,A.group=h),e++,A}function c(u,p,v,S,m,h){const A=o(u,p,v,S,m,h);v.transmission>0?i.push(A):v.transparent===!0?a.push(A):t.push(A)}function l(u,p,v,S,m,h){const A=o(u,p,v,S,m,h);v.transmission>0?i.unshift(A):v.transparent===!0?a.unshift(A):t.unshift(A)}function d(u,p,v){t.length>1&&t.sort(u||Sf),i.length>1&&i.sort(p||Ao),a.length>1&&a.sort(p||Ao),v&&(t.reverse(),i.reverse(),a.reverse())}function g(){for(let u=e,p=r.length;u<p;u++){const v=r[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:a,init:n,push:c,unshift:l,finish:g,sort:d}}function yf(){let r=new WeakMap;function e(i,a){const n=r.get(i);let s;return n===void 0?(s=new wo,r.set(i,[s])):a>=n.length?(s=new wo,n.push(s)):s=n[a],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ef(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Fe};break;case"SpotLight":t={position:new F,direction:new F,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function Tf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let bf=0;function Af(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function wf(r){const e=new Ef,t=Tf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);const a=new F,n=new tt,s=new tt;function o(l){let d=0,g=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,v=0,S=0,m=0,h=0,A=0,C=0,M=0,b=0,T=0,w=0;l.sort(Af);for(let E=0,L=l.length;E<L;E++){const R=l[E],N=R.color,j=R.intensity,X=R.distance;let H=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===zi?H=R.shadow.map.texture:H=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=N.r*j,g+=N.g*j,u+=N.b*j;else if(R.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(R.sh.coefficients[q],j);w++}else if(R.isDirectionalLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const k=R.shadow,J=t.get(R);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=R.shadow.matrix,A++}i.directional[p]=q,p++}else if(R.isSpotLight){const q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(N).multiplyScalar(j),q.distance=X,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,i.spot[S]=q;const k=R.shadow;if(R.map&&(i.spotLightMap[b]=R.map,b++,k.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[S]=k.matrix,R.castShadow){const J=t.get(R);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,i.spotShadow[S]=J,i.spotShadowMap[S]=H,M++}S++}else if(R.isRectAreaLight){const q=e.get(R);q.color.copy(N).multiplyScalar(j),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=q,m++}else if(R.isPointLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const k=R.shadow,J=t.get(R);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,J.shadowCameraNear=k.camera.near,J.shadowCameraFar=k.camera.far,i.pointShadow[v]=J,i.pointShadowMap[v]=H,i.pointShadowMatrix[v]=R.shadow.matrix,C++}i.point[v]=q,v++}else if(R.isHemisphereLight){const q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(j),q.groundColor.copy(R.groundColor).multiplyScalar(j),i.hemi[h]=q,h++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=g,i.ambient[2]=u;const _=i.hash;(_.directionalLength!==p||_.pointLength!==v||_.spotLength!==S||_.rectAreaLength!==m||_.hemiLength!==h||_.numDirectionalShadows!==A||_.numPointShadows!==C||_.numSpotShadows!==M||_.numSpotMaps!==b||_.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=M+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,_.directionalLength=p,_.pointLength=v,_.spotLength=S,_.rectAreaLength=m,_.hemiLength=h,_.numDirectionalShadows=A,_.numPointShadows=C,_.numSpotShadows=M,_.numSpotMaps=b,_.numLightProbes=w,i.version=bf++)}function c(l,d){let g=0,u=0,p=0,v=0,S=0;const m=d.matrixWorldInverse;for(let h=0,A=l.length;h<A;h++){const C=l[h];if(C.isDirectionalLight){const M=i.directional[g];M.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(m),g++}else if(C.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(m),p++}else if(C.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(m),s.identity(),n.copy(C.matrixWorld),n.premultiply(m),s.extractRotation(n),M.halfWidth.set(C.width*.5,0,0),M.halfHeight.set(0,C.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),v++}else if(C.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(m),u++}else if(C.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(C.matrixWorld),M.direction.transformDirection(m),S++}}}return{setup:o,setupView:c,state:i}}function Ro(r){const e=new wf(r),t=[],i=[],a=[];function n(u){g.camera=u,t.length=0,i.length=0,a.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function c(u){a.push(u)}function l(){e.setup(t)}function d(u){e.setupView(t,u)}const g={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:g,setupLights:l,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:c}}function Rf(r){let e=new WeakMap;function t(a,n=0){const s=e.get(a);let o;return s===void 0?(o=new Ro(r),e.set(a,[o])):n>=s.length?(o=new Ro(r),s.push(o)):o=s[n],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Cf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Lf=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Uf=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Co=new tt,br=new F,cn=new F;function Df(r,e,t){let i=new fs;const a=new He,n=new He,s=new st,o=new kc,c=new Wc,l={},d=t.maxTextureSize,g={[bi]:bt,[bt]:bi,[ci]:ci},u=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Cf,fragmentShader:Pf}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new wt;v.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new gt(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=la;let h=this.type;this.render=function(T,w,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Cl&&(be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=la);const E=r.getRenderTarget(),L=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),N=r.state;N.setBlending(hi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const j=h!==this.type;j&&w.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(H=>H.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,H=T.length;X<H;X++){const q=T[X],k=q.shadow;if(k===void 0){be("WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const J=k.getFrameExtents();a.multiply(J),n.copy(k.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(n.x=Math.floor(d/J.x),a.x=n.x*J.x,k.mapSize.x=n.x),a.y>d&&(n.y=Math.floor(d/J.y),a.y=n.y*J.y,k.mapSize.y=n.y));const ee=r.state.buffers.depth.getReversed();if(k.camera._reversedDepth=ee,k.map===null||j===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ar){if(q.isPointLight){be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ti(a.x,a.y,{format:zi,type:pi,minFilter:St,magFilter:St,generateMipmaps:!1}),k.map.texture.name=q.name+".shadowMap",k.map.depthTexture=new pr(a.x,a.y,$t),k.map.depthTexture.name=q.name+".shadowMapDepth",k.map.depthTexture.format=fi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=_t,k.map.depthTexture.magFilter=_t}else q.isPointLight?(k.map=new pl(a.x),k.map.depthTexture=new Ic(a.x,ii)):(k.map=new ti(a.x,a.y),k.map.depthTexture=new pr(a.x,a.y,ii)),k.map.depthTexture.name=q.name+".shadowMap",k.map.depthTexture.format=fi,this.type===la?(k.map.depthTexture.compareFunction=ee?hs:us,k.map.depthTexture.minFilter=St,k.map.depthTexture.magFilter=St):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=_t,k.map.depthTexture.magFilter=_t);k.camera.updateProjectionMatrix()}const re=k.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<re;ue++){if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,ue),r.clear();else{ue===0&&(r.setRenderTarget(k.map),r.clear());const Me=k.getViewport(ue);s.set(n.x*Me.x,n.y*Me.y,n.x*Me.z,n.y*Me.w),N.viewport(s)}if(q.isPointLight){const Me=k.camera,Be=k.matrix,$e=q.distance||Me.far;$e!==Me.far&&(Me.far=$e,Me.updateProjectionMatrix()),br.setFromMatrixPosition(q.matrixWorld),Me.position.copy(br),cn.copy(Me.position),cn.add(Lf[ue]),Me.up.copy(Uf[ue]),Me.lookAt(cn),Me.updateMatrixWorld(),Be.makeTranslation(-br.x,-br.y,-br.z),Co.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Co,Me.coordinateSystem,Me.reversedDepth)}else k.updateMatrices(q);i=k.getFrustum(),M(w,_,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===Ar&&A(k,_),k.needsUpdate=!1}h=this.type,m.needsUpdate=!1,r.setRenderTarget(E,L,R)};function A(T,w){const _=e.update(S);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ti(a.x,a.y,{format:zi,type:pi})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(w,null,_,u,S,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(w,null,_,p,S,null)}function C(T,w,_,E){let L=null;const R=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)L=R;else if(L=_.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const N=L.uuid,j=w.uuid;let X=l[N];X===void 0&&(X={},l[N]=X);let H=X[j];H===void 0&&(H=L.clone(),X[j]=H,w.addEventListener("dispose",b)),L=H}if(L.visible=w.visible,L.wireframe=w.wireframe,E===Ar?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:g[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const N=r.properties.get(L);N.light=_}return L}function M(T,w,_,E,L){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===Ar)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const N=e.update(T),j=T.material;if(Array.isArray(j)){const X=N.groups;for(let H=0,q=X.length;H<q;H++){const k=X[H],J=j[k.materialIndex];if(J&&J.visible){const ee=C(T,J,E,L);T.onBeforeShadow(r,T,w,_,N,ee,k),r.renderBufferDirect(_,null,N,ee,T,k),T.onAfterShadow(r,T,w,_,N,ee,k)}}}else if(j.visible){const X=C(T,j,E,L);T.onBeforeShadow(r,T,w,_,N,X,null),r.renderBufferDirect(_,null,N,X,T,null),T.onAfterShadow(r,T,w,_,N,X,null)}}const R=T.children;for(let N=0,j=R.length;N<j;N++)M(R[N],w,_,E,L)}function b(T){T.target.removeEventListener("dispose",b);for(const w in l){const _=l[w],E=T.target.uuid;E in _&&(_[E].dispose(),delete _[E])}}}function Nf(r,e){function t(){let P=!1;const Z=new st;let te=null;const de=new st(0,0,0,0);return{setMask:function(me){te!==me&&!P&&(r.colorMask(me,me,me,me),te=me)},setLocked:function(me){P=me},setClear:function(me,$,ye,fe,Et){Et===!0&&(me*=fe,$*=fe,ye*=fe),Z.set(me,$,ye,fe),de.equals(Z)===!1&&(r.clearColor(me,$,ye,fe),de.copy(Z))},reset:function(){P=!1,te=null,de.set(-1,0,0,0)}}}function i(){let P=!1,Z=!1,te=null,de=null,me=null;return{setReversed:function($){if(Z!==$){const ye=e.get("EXT_clip_control");$?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),Z=$;const fe=me;me=null,this.setClear(fe)}},getReversed:function(){return Z},setTest:function($){$?K(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function($){te!==$&&!P&&(r.depthMask($),te=$)},setFunc:function($){if(Z&&($=lc[$]),de!==$){switch($){case dn:r.depthFunc(r.NEVER);break;case pn:r.depthFunc(r.ALWAYS);break;case fn:r.depthFunc(r.LESS);break;case hr:r.depthFunc(r.LEQUAL);break;case mn:r.depthFunc(r.EQUAL);break;case gn:r.depthFunc(r.GEQUAL);break;case _n:r.depthFunc(r.GREATER);break;case vn:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=$}},setLocked:function($){P=$},setClear:function($){me!==$&&(me=$,Z&&($=1-$),r.clearDepth($))},reset:function(){P=!1,te=null,de=null,me=null,Z=!1}}}function a(){let P=!1,Z=null,te=null,de=null,me=null,$=null,ye=null,fe=null,Et=null;return{setTest:function(Ze){P||(Ze?K(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(Ze){Z!==Ze&&!P&&(r.stencilMask(Ze),Z=Ze)},setFunc:function(Ze,Xt,jt){(te!==Ze||de!==Xt||me!==jt)&&(r.stencilFunc(Ze,Xt,jt),te=Ze,de=Xt,me=jt)},setOp:function(Ze,Xt,jt){($!==Ze||ye!==Xt||fe!==jt)&&(r.stencilOp(Ze,Xt,jt),$=Ze,ye=Xt,fe=jt)},setLocked:function(Ze){P=Ze},setClear:function(Ze){Et!==Ze&&(r.clearStencil(Ze),Et=Ze)},reset:function(){P=!1,Z=null,te=null,de=null,me=null,$=null,ye=null,fe=null,Et=null}}}const n=new t,s=new i,o=new a,c=new WeakMap,l=new WeakMap;let d={},g={},u={},p=new WeakMap,v=[],S=null,m=!1,h=null,A=null,C=null,M=null,b=null,T=null,w=null,_=new Fe(0,0,0),E=0,L=!1,R=null,N=null,j=null,X=null,H=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,J=0;const ee=r.getParameter(r.VERSION);ee.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ee)[1]),k=J>=1):ee.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),k=J>=2);let re=null,ue={};const Me=r.getParameter(r.SCISSOR_BOX),Be=r.getParameter(r.VIEWPORT),$e=new st().fromArray(Me),Ge=new st().fromArray(Be);function Y(P,Z,te,de){const me=new Uint8Array(4),$=r.createTexture();r.bindTexture(P,$),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ye=0;ye<te;ye++)P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY?r.texImage3D(Z,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,me):r.texImage2D(Z+ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,me);return $}const ie={};ie[r.TEXTURE_2D]=Y(r.TEXTURE_2D,r.TEXTURE_2D,1),ie[r.TEXTURE_CUBE_MAP]=Y(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[r.TEXTURE_2D_ARRAY]=Y(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ie[r.TEXTURE_3D]=Y(r.TEXTURE_3D,r.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),K(r.DEPTH_TEST),s.setFunc(hr),vt(!1),ct(As),K(r.CULL_FACE),Qe(hi);function K(P){d[P]!==!0&&(r.enable(P),d[P]=!0)}function Se(P){d[P]!==!1&&(r.disable(P),d[P]=!1)}function Ce(P,Z){return u[P]!==Z?(r.bindFramebuffer(P,Z),u[P]=Z,P===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Z),P===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Z),!0):!1}function pe(P,Z){let te=v,de=!1;if(P){te=p.get(Z),te===void 0&&(te=[],p.set(Z,te));const me=P.textures;if(te.length!==me.length||te[0]!==r.COLOR_ATTACHMENT0){for(let $=0,ye=me.length;$<ye;$++)te[$]=r.COLOR_ATTACHMENT0+$;te.length=me.length,de=!0}}else te[0]!==r.BACK&&(te[0]=r.BACK,de=!0);de&&r.drawBuffers(te)}function Ve(P){return S!==P?(r.useProgram(P),S=P,!0):!1}const We={[Ni]:r.FUNC_ADD,[Ll]:r.FUNC_SUBTRACT,[Ul]:r.FUNC_REVERSE_SUBTRACT};We[Dl]=r.MIN,We[Nl]=r.MAX;const Ie={[Il]:r.ZERO,[Ol]:r.ONE,[Fl]:r.SRC_COLOR,[un]:r.SRC_ALPHA,[kl]:r.SRC_ALPHA_SATURATE,[Gl]:r.DST_COLOR,[zl]:r.DST_ALPHA,[Bl]:r.ONE_MINUS_SRC_COLOR,[hn]:r.ONE_MINUS_SRC_ALPHA,[Vl]:r.ONE_MINUS_DST_COLOR,[Hl]:r.ONE_MINUS_DST_ALPHA,[Wl]:r.CONSTANT_COLOR,[Xl]:r.ONE_MINUS_CONSTANT_COLOR,[jl]:r.CONSTANT_ALPHA,[ql]:r.ONE_MINUS_CONSTANT_ALPHA};function Qe(P,Z,te,de,me,$,ye,fe,Et,Ze){if(P===hi){m===!0&&(Se(r.BLEND),m=!1);return}if(m===!1&&(K(r.BLEND),m=!0),P!==Pl){if(P!==h||Ze!==L){if((A!==Ni||b!==Ni)&&(r.blendEquation(r.FUNC_ADD),A=Ni,b=Ni),Ze)switch(P){case lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ws:r.blendFunc(r.ONE,r.ONE);break;case Rs:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Cs:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ke("WebGLState: Invalid blending: ",P);break}else switch(P){case lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ws:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Rs:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cs:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",P);break}C=null,M=null,T=null,w=null,_.set(0,0,0),E=0,h=P,L=Ze}return}me=me||Z,$=$||te,ye=ye||de,(Z!==A||me!==b)&&(r.blendEquationSeparate(We[Z],We[me]),A=Z,b=me),(te!==C||de!==M||$!==T||ye!==w)&&(r.blendFuncSeparate(Ie[te],Ie[de],Ie[$],Ie[ye]),C=te,M=de,T=$,w=ye),(fe.equals(_)===!1||Et!==E)&&(r.blendColor(fe.r,fe.g,fe.b,Et),_.copy(fe),E=Et),h=P,L=!1}function Rt(P,Z){P.side===ci?Se(r.CULL_FACE):K(r.CULL_FACE);let te=P.side===bt;Z&&(te=!te),vt(te),P.blending===lr&&P.transparent===!1?Qe(hi):Qe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),n.setMask(P.colorWrite);const de=P.stencilWrite;o.setTest(de),de&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),mt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function vt(P){R!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),R=P)}function ct(P){P!==wl?(K(r.CULL_FACE),P!==N&&(P===As?r.cullFace(r.BACK):P===Rl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),N=P}function dt(P){P!==j&&(k&&r.lineWidth(P),j=P)}function mt(P,Z,te){P?(K(r.POLYGON_OFFSET_FILL),(X!==Z||H!==te)&&(X=Z,H=te,s.getReversed()&&(Z=-Z),r.polygonOffset(Z,te))):Se(r.POLYGON_OFFSET_FILL)}function it(P){P?K(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function ot(P){P===void 0&&(P=r.TEXTURE0+q-1),re!==P&&(r.activeTexture(P),re=P)}function U(P,Z,te){te===void 0&&(re===null?te=r.TEXTURE0+q-1:te=re);let de=ue[te];de===void 0&&(de={type:void 0,texture:void 0},ue[te]=de),(de.type!==P||de.texture!==Z)&&(re!==te&&(r.activeTexture(te),re=te),r.bindTexture(P,Z||ie[P]),de.type=P,de.texture=Z)}function Ct(){const P=ue[re];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Xe(){try{r.compressedTexImage2D(...arguments)}catch(P){ke("WebGLState:",P)}}function y(){try{r.compressedTexImage3D(...arguments)}catch(P){ke("WebGLState:",P)}}function f(){try{r.texSubImage2D(...arguments)}catch(P){ke("WebGLState:",P)}}function O(){try{r.texSubImage3D(...arguments)}catch(P){ke("WebGLState:",P)}}function G(){try{r.compressedTexSubImage2D(...arguments)}catch(P){ke("WebGLState:",P)}}function W(){try{r.compressedTexSubImage3D(...arguments)}catch(P){ke("WebGLState:",P)}}function se(){try{r.texStorage2D(...arguments)}catch(P){ke("WebGLState:",P)}}function le(){try{r.texStorage3D(...arguments)}catch(P){ke("WebGLState:",P)}}function D(){try{r.texImage2D(...arguments)}catch(P){ke("WebGLState:",P)}}function ne(){try{r.texImage3D(...arguments)}catch(P){ke("WebGLState:",P)}}function oe(P){return g[P]!==void 0?g[P]:r.getParameter(P)}function ve(P,Z){g[P]!==Z&&(r.pixelStorei(P,Z),g[P]=Z)}function Q(P){$e.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),$e.copy(P))}function we(P){Ge.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),Ge.copy(P))}function Ee(P,Z){let te=l.get(Z);te===void 0&&(te=new WeakMap,l.set(Z,te));let de=te.get(P);de===void 0&&(de=r.getUniformBlockIndex(Z,P.name),te.set(P,de))}function Re(P,Z){const te=l.get(Z).get(P);c.get(Z)!==te&&(r.uniformBlockBinding(Z,te,P.__bindingPointIndex),c.set(Z,te))}function Le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),s.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),d={},g={},re=null,ue={},u={},p=new WeakMap,v=[],S=null,m=!1,h=null,A=null,C=null,M=null,b=null,T=null,w=null,_=new Fe(0,0,0),E=0,L=!1,R=null,N=null,j=null,X=null,H=null,$e.set(0,0,r.canvas.width,r.canvas.height),Ge.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:K,disable:Se,bindFramebuffer:Ce,drawBuffers:pe,useProgram:Ve,setBlending:Qe,setMaterial:Rt,setFlipSided:vt,setCullFace:ct,setLineWidth:dt,setPolygonOffset:mt,setScissorTest:it,activeTexture:ot,bindTexture:U,unbindTexture:Ct,compressedTexImage2D:Xe,compressedTexImage3D:y,texImage2D:D,texImage3D:ne,pixelStorei:ve,getParameter:oe,updateUBOMapping:Ee,uniformBlockBinding:Re,texStorage2D:se,texStorage3D:le,texSubImage2D:f,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:W,scissor:Q,viewport:we,reset:Le}}function If(r,e,t,i,a,n,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,d=new WeakMap,g=new Set;let u;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(y,f){return v?new OffscreenCanvas(y,f):va("canvas")}function m(y,f,O){let G=1;const W=Xe(y);if((W.width>O||W.height>O)&&(G=O/Math.max(W.width,W.height)),G<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const se=Math.floor(G*W.width),le=Math.floor(G*W.height);u===void 0&&(u=S(se,le));const D=f?S(se,le):u;return D.width=se,D.height=le,D.getContext("2d").drawImage(y,0,0,se,le),be("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+se+"x"+le+")."),D}else return"data"in y&&be("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),y;return y}function h(y){return y.generateMipmaps}function A(y){r.generateMipmap(y)}function C(y){return y.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?r.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(y,f,O,G,W,se=!1){if(y!==null){if(r[y]!==void 0)return r[y];be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let le;G&&(le=e.get("EXT_texture_norm16"),le||be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let D=f;if(f===r.RED&&(O===r.FLOAT&&(D=r.R32F),O===r.HALF_FLOAT&&(D=r.R16F),O===r.UNSIGNED_BYTE&&(D=r.R8),O===r.UNSIGNED_SHORT&&le&&(D=le.R16_EXT),O===r.SHORT&&le&&(D=le.R16_SNORM_EXT)),f===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(D=r.R8UI),O===r.UNSIGNED_SHORT&&(D=r.R16UI),O===r.UNSIGNED_INT&&(D=r.R32UI),O===r.BYTE&&(D=r.R8I),O===r.SHORT&&(D=r.R16I),O===r.INT&&(D=r.R32I)),f===r.RG&&(O===r.FLOAT&&(D=r.RG32F),O===r.HALF_FLOAT&&(D=r.RG16F),O===r.UNSIGNED_BYTE&&(D=r.RG8),O===r.UNSIGNED_SHORT&&le&&(D=le.RG16_EXT),O===r.SHORT&&le&&(D=le.RG16_SNORM_EXT)),f===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(D=r.RG8UI),O===r.UNSIGNED_SHORT&&(D=r.RG16UI),O===r.UNSIGNED_INT&&(D=r.RG32UI),O===r.BYTE&&(D=r.RG8I),O===r.SHORT&&(D=r.RG16I),O===r.INT&&(D=r.RG32I)),f===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(D=r.RGB8UI),O===r.UNSIGNED_SHORT&&(D=r.RGB16UI),O===r.UNSIGNED_INT&&(D=r.RGB32UI),O===r.BYTE&&(D=r.RGB8I),O===r.SHORT&&(D=r.RGB16I),O===r.INT&&(D=r.RGB32I)),f===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(D=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(D=r.RGBA16UI),O===r.UNSIGNED_INT&&(D=r.RGBA32UI),O===r.BYTE&&(D=r.RGBA8I),O===r.SHORT&&(D=r.RGBA16I),O===r.INT&&(D=r.RGBA32I)),f===r.RGB&&(O===r.UNSIGNED_SHORT&&le&&(D=le.RGB16_EXT),O===r.SHORT&&le&&(D=le.RGB16_SNORM_EXT),O===r.UNSIGNED_INT_5_9_9_9_REV&&(D=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&(D=r.R11F_G11F_B10F)),f===r.RGBA){const ne=se?_a:ze.getTransfer(W);O===r.FLOAT&&(D=r.RGBA32F),O===r.HALF_FLOAT&&(D=r.RGBA16F),O===r.UNSIGNED_BYTE&&(D=ne===je?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT&&le&&(D=le.RGBA16_EXT),O===r.SHORT&&le&&(D=le.RGBA16_SNORM_EXT),O===r.UNSIGNED_SHORT_4_4_4_4&&(D=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(D=r.RGB5_A1)}return(D===r.R16F||D===r.R32F||D===r.RG16F||D===r.RG32F||D===r.RGBA16F||D===r.RGBA32F)&&e.get("EXT_color_buffer_float"),D}function b(y,f){let O;return y?f===null||f===ii||f===Cr?O=r.DEPTH24_STENCIL8:f===$t?O=r.DEPTH32F_STENCIL8:f===Rr&&(O=r.DEPTH24_STENCIL8,be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):f===null||f===ii||f===Cr?O=r.DEPTH_COMPONENT24:f===$t?O=r.DEPTH_COMPONENT32F:f===Rr&&(O=r.DEPTH_COMPONENT16),O}function T(y,f){return h(y)===!0||y.isFramebufferTexture&&y.minFilter!==_t&&y.minFilter!==St?Math.log2(Math.max(f.width,f.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?f.mipmaps.length:1}function w(y){const f=y.target;f.removeEventListener("dispose",w),E(f),f.isVideoTexture&&d.delete(f),f.isHTMLTexture&&g.delete(f)}function _(y){const f=y.target;f.removeEventListener("dispose",_),R(f)}function E(y){const f=i.get(y);if(f.__webglInit===void 0)return;const O=y.source,G=p.get(O);if(G){const W=G[f.__cacheKey];W.usedTimes--,W.usedTimes===0&&L(y),Object.keys(G).length===0&&p.delete(O)}i.remove(y)}function L(y){const f=i.get(y);r.deleteTexture(f.__webglTexture);const O=y.source,G=p.get(O);delete G[f.__cacheKey],s.memory.textures--}function R(y){const f=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(f.__webglFramebuffer[G]))for(let W=0;W<f.__webglFramebuffer[G].length;W++)r.deleteFramebuffer(f.__webglFramebuffer[G][W]);else r.deleteFramebuffer(f.__webglFramebuffer[G]);f.__webglDepthbuffer&&r.deleteRenderbuffer(f.__webglDepthbuffer[G])}else{if(Array.isArray(f.__webglFramebuffer))for(let G=0;G<f.__webglFramebuffer.length;G++)r.deleteFramebuffer(f.__webglFramebuffer[G]);else r.deleteFramebuffer(f.__webglFramebuffer);if(f.__webglDepthbuffer&&r.deleteRenderbuffer(f.__webglDepthbuffer),f.__webglMultisampledFramebuffer&&r.deleteFramebuffer(f.__webglMultisampledFramebuffer),f.__webglColorRenderbuffer)for(let G=0;G<f.__webglColorRenderbuffer.length;G++)f.__webglColorRenderbuffer[G]&&r.deleteRenderbuffer(f.__webglColorRenderbuffer[G]);f.__webglDepthRenderbuffer&&r.deleteRenderbuffer(f.__webglDepthRenderbuffer)}const O=y.textures;for(let G=0,W=O.length;G<W;G++){const se=i.get(O[G]);se.__webglTexture&&(r.deleteTexture(se.__webglTexture),s.memory.textures--),i.remove(O[G])}i.remove(y)}let N=0;function j(){N=0}function X(){return N}function H(y){N=y}function q(){const y=N;return y>=a.maxTextures&&be("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+a.maxTextures),N+=1,y}function k(y){const f=[];return f.push(y.wrapS),f.push(y.wrapT),f.push(y.wrapR||0),f.push(y.magFilter),f.push(y.minFilter),f.push(y.anisotropy),f.push(y.internalFormat),f.push(y.format),f.push(y.type),f.push(y.generateMipmaps),f.push(y.premultiplyAlpha),f.push(y.flipY),f.push(y.unpackAlignment),f.push(y.colorSpace),f.join()}function J(y,f){const O=i.get(y);if(y.isVideoTexture&&U(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&O.__version!==y.version){const G=y.image;if(G===null)be("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)be("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(O,y,f);return}}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+f)}function ee(y,f){const O=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){Se(O,y,f);return}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+f)}function re(y,f){const O=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){Se(O,y,f);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+f)}function ue(y,f){const O=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&O.__version!==y.version){Ce(O,y,f);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+f)}const Me={[xn]:r.REPEAT,[ui]:r.CLAMP_TO_EDGE,[Mn]:r.MIRRORED_REPEAT},Be={[_t]:r.NEAREST,[Jl]:r.NEAREST_MIPMAP_NEAREST,[Or]:r.NEAREST_MIPMAP_LINEAR,[St]:r.LINEAR,[Pa]:r.LINEAR_MIPMAP_NEAREST,[Oi]:r.LINEAR_MIPMAP_LINEAR},$e={[Ql]:r.NEVER,[ac]:r.ALWAYS,[ec]:r.LESS,[us]:r.LEQUAL,[tc]:r.EQUAL,[hs]:r.GEQUAL,[ic]:r.GREATER,[rc]:r.NOTEQUAL};function Ge(y,f){if(f.type===$t&&e.has("OES_texture_float_linear")===!1&&(f.magFilter===St||f.magFilter===Pa||f.magFilter===Or||f.magFilter===Oi||f.minFilter===St||f.minFilter===Pa||f.minFilter===Or||f.minFilter===Oi)&&be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(y,r.TEXTURE_WRAP_S,Me[f.wrapS]),r.texParameteri(y,r.TEXTURE_WRAP_T,Me[f.wrapT]),(y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY)&&r.texParameteri(y,r.TEXTURE_WRAP_R,Me[f.wrapR]),r.texParameteri(y,r.TEXTURE_MAG_FILTER,Be[f.magFilter]),r.texParameteri(y,r.TEXTURE_MIN_FILTER,Be[f.minFilter]),f.compareFunction&&(r.texParameteri(y,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(y,r.TEXTURE_COMPARE_FUNC,$e[f.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(f.magFilter===_t||f.minFilter!==Or&&f.minFilter!==Oi||f.type===$t&&e.has("OES_texture_float_linear")===!1)return;if(f.anisotropy>1||i.get(f).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(y,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,a.getMaxAnisotropy())),i.get(f).__currentAnisotropy=f.anisotropy}}}function Y(y,f){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,f.addEventListener("dispose",w));const G=f.source;let W=p.get(G);W===void 0&&(W={},p.set(G,W));const se=k(f);if(se!==y.__cacheKey){W[se]===void 0&&(W[se]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,O=!0),W[se].usedTimes++;const le=W[y.__cacheKey];le!==void 0&&(W[y.__cacheKey].usedTimes--,le.usedTimes===0&&L(f)),y.__cacheKey=se,y.__webglTexture=W[se].texture}return O}function ie(y,f,O){return Math.floor(Math.floor(y/O)/f)}function K(y,f,O,G){const W=y.updateRanges;if(W.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,f.width,f.height,O,G,f.data);else{W.sort((oe,ve)=>oe.start-ve.start);let se=0;for(let oe=1;oe<W.length;oe++){const ve=W[se],Q=W[oe],we=ve.start+ve.count,Ee=ie(Q.start,f.width,4),Re=ie(ve.start,f.width,4);Q.start<=we+1&&Ee===Re&&ie(Q.start+Q.count-1,f.width,4)===Ee?ve.count=Math.max(ve.count,Q.start+Q.count-ve.start):(++se,W[se]=Q)}W.length=se+1;const le=t.getParameter(r.UNPACK_ROW_LENGTH),D=t.getParameter(r.UNPACK_SKIP_PIXELS),ne=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,f.width);for(let oe=0,ve=W.length;oe<ve;oe++){const Q=W[oe],we=Math.floor(Q.start/4),Ee=Math.ceil(Q.count/4),Re=we%f.width,Le=Math.floor(we/f.width),P=Ee;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(r.UNPACK_SKIP_ROWS,Le),t.texSubImage2D(r.TEXTURE_2D,0,Re,Le,P,1,O,G,f.data)}y.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,le),t.pixelStorei(r.UNPACK_SKIP_PIXELS,D),t.pixelStorei(r.UNPACK_SKIP_ROWS,ne)}}function Se(y,f,O){let G=r.TEXTURE_2D;(f.isDataArrayTexture||f.isCompressedArrayTexture)&&(G=r.TEXTURE_2D_ARRAY),f.isData3DTexture&&(G=r.TEXTURE_3D);const W=Y(y,f),se=f.source;t.bindTexture(G,y.__webglTexture,r.TEXTURE0+O);const le=i.get(se);if(se.version!==le.__version||W===!0){if(t.activeTexture(r.TEXTURE0+O),!(typeof ImageBitmap<"u"&&f.image instanceof ImageBitmap)){const Z=ze.getPrimaries(ze.workingColorSpace),te=f.colorSpace===Ei?null:ze.getPrimaries(f.colorSpace),de=f.colorSpace===Ei||Z===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,f.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}t.pixelStorei(r.UNPACK_ALIGNMENT,f.unpackAlignment);let D=m(f.image,!1,a.maxTextureSize);D=Ct(f,D);const ne=n.convert(f.format,f.colorSpace),oe=n.convert(f.type);let ve=M(f.internalFormat,ne,oe,f.normalized,f.colorSpace,f.isVideoTexture);Ge(G,f);let Q;const we=f.mipmaps,Ee=f.isVideoTexture!==!0,Re=le.__version===void 0||W===!0,Le=se.dataReady,P=T(f,D);if(f.isDepthTexture)ve=b(f.format===Fi,f.type),Re&&(Ee?t.texStorage2D(r.TEXTURE_2D,1,ve,D.width,D.height):t.texImage2D(r.TEXTURE_2D,0,ve,D.width,D.height,0,ne,oe,null));else if(f.isDataTexture)if(we.length>0){Ee&&Re&&t.texStorage2D(r.TEXTURE_2D,P,ve,we[0].width,we[0].height);for(let Z=0,te=we.length;Z<te;Z++)Q=we[Z],Ee?Le&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,Q.width,Q.height,ne,oe,Q.data):t.texImage2D(r.TEXTURE_2D,Z,ve,Q.width,Q.height,0,ne,oe,Q.data);f.generateMipmaps=!1}else Ee?(Re&&t.texStorage2D(r.TEXTURE_2D,P,ve,D.width,D.height),Le&&K(f,D,ne,oe)):t.texImage2D(r.TEXTURE_2D,0,ve,D.width,D.height,0,ne,oe,D.data);else if(f.isCompressedTexture)if(f.isCompressedArrayTexture){Ee&&Re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,P,ve,we[0].width,we[0].height,D.depth);for(let Z=0,te=we.length;Z<te;Z++)if(Q=we[Z],f.format!==kt)if(ne!==null)if(Ee){if(Le)if(f.layerUpdates.size>0){const de=no(Q.width,Q.height,f.format,f.type);for(const me of f.layerUpdates){const $=Q.data.subarray(me*de/Q.data.BYTES_PER_ELEMENT,(me+1)*de/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,me,Q.width,Q.height,1,ne,$)}f.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Q.width,Q.height,D.depth,ne,Q.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,ve,Q.width,Q.height,D.depth,0,Q.data,0,0);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?Le&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Q.width,Q.height,D.depth,ne,oe,Q.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Z,ve,Q.width,Q.height,D.depth,0,ne,oe,Q.data)}else{Ee&&Re&&t.texStorage2D(r.TEXTURE_2D,P,ve,we[0].width,we[0].height);for(let Z=0,te=we.length;Z<te;Z++)Q=we[Z],f.format!==kt?ne!==null?Ee?Le&&t.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,Q.width,Q.height,ne,Q.data):t.compressedTexImage2D(r.TEXTURE_2D,Z,ve,Q.width,Q.height,0,Q.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?Le&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,Q.width,Q.height,ne,oe,Q.data):t.texImage2D(r.TEXTURE_2D,Z,ve,Q.width,Q.height,0,ne,oe,Q.data)}else if(f.isDataArrayTexture)if(Ee){if(Re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,P,ve,D.width,D.height,D.depth),Le)if(f.layerUpdates.size>0){const Z=no(D.width,D.height,f.format,f.type);for(const te of f.layerUpdates){const de=D.data.subarray(te*Z/D.data.BYTES_PER_ELEMENT,(te+1)*Z/D.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,D.width,D.height,1,ne,oe,de)}f.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,ne,oe,D.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ve,D.width,D.height,D.depth,0,ne,oe,D.data);else if(f.isData3DTexture)Ee?(Re&&t.texStorage3D(r.TEXTURE_3D,P,ve,D.width,D.height,D.depth),Le&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,ne,oe,D.data)):t.texImage3D(r.TEXTURE_3D,0,ve,D.width,D.height,D.depth,0,ne,oe,D.data);else if(f.isFramebufferTexture){if(Re)if(Ee)t.texStorage2D(r.TEXTURE_2D,P,ve,D.width,D.height);else{let Z=D.width,te=D.height;for(let de=0;de<P;de++)t.texImage2D(r.TEXTURE_2D,de,ve,Z,te,0,ne,oe,null),Z>>=1,te>>=1}}else if(f.isHTMLTexture){if("texElementImage2D"in r){const Z=r.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),D.parentNode!==Z){Z.appendChild(D),g.add(f),Z.onpaint=te=>{const de=te.changedElements;for(const me of g)de.includes(me.image)&&(me.needsUpdate=!0)},Z.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,D);else{const te=r.RGBA,de=r.RGBA,me=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,te,de,me,D)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(we.length>0){if(Ee&&Re){const Z=Xe(we[0]);t.texStorage2D(r.TEXTURE_2D,P,ve,Z.width,Z.height)}for(let Z=0,te=we.length;Z<te;Z++)Q=we[Z],Ee?Le&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,ne,oe,Q):t.texImage2D(r.TEXTURE_2D,Z,ve,ne,oe,Q);f.generateMipmaps=!1}else if(Ee){if(Re){const Z=Xe(D);t.texStorage2D(r.TEXTURE_2D,P,ve,Z.width,Z.height)}Le&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne,oe,D)}else t.texImage2D(r.TEXTURE_2D,0,ve,ne,oe,D);h(f)&&A(G),le.__version=se.version,f.onUpdate&&f.onUpdate(f)}y.__version=f.version}function Ce(y,f,O){if(f.image.length!==6)return;const G=Y(y,f),W=f.source;t.bindTexture(r.TEXTURE_CUBE_MAP,y.__webglTexture,r.TEXTURE0+O);const se=i.get(W);if(W.version!==se.__version||G===!0){t.activeTexture(r.TEXTURE0+O);const le=ze.getPrimaries(ze.workingColorSpace),D=f.colorSpace===Ei?null:ze.getPrimaries(f.colorSpace),ne=f.colorSpace===Ei||le===D?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,f.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,f.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const oe=f.isCompressedTexture||f.image[0].isCompressedTexture,ve=f.image[0]&&f.image[0].isDataTexture,Q=[];for(let $=0;$<6;$++)!oe&&!ve?Q[$]=m(f.image[$],!0,a.maxCubemapSize):Q[$]=ve?f.image[$].image:f.image[$],Q[$]=Ct(f,Q[$]);const we=Q[0],Ee=n.convert(f.format,f.colorSpace),Re=n.convert(f.type),Le=M(f.internalFormat,Ee,Re,f.normalized,f.colorSpace),P=f.isVideoTexture!==!0,Z=se.__version===void 0||G===!0,te=W.dataReady;let de=T(f,we);Ge(r.TEXTURE_CUBE_MAP,f);let me;if(oe){P&&Z&&t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Le,we.width,we.height);for(let $=0;$<6;$++){me=Q[$].mipmaps;for(let ye=0;ye<me.length;ye++){const fe=me[ye];f.format!==kt?Ee!==null?P?te&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,fe.width,fe.height,Ee,fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,Le,fe.width,fe.height,0,fe.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,fe.width,fe.height,Ee,Re,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,Le,fe.width,fe.height,0,Ee,Re,fe.data)}}}else{if(me=f.mipmaps,P&&Z){me.length>0&&de++;const $=Xe(Q[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Le,$.width,$.height)}for(let $=0;$<6;$++)if(ve){P?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Q[$].width,Q[$].height,Ee,Re,Q[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Le,Q[$].width,Q[$].height,0,Ee,Re,Q[$].data);for(let ye=0;ye<me.length;ye++){const fe=me[ye].image[$].image;P?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,fe.width,fe.height,Ee,Re,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,Le,fe.width,fe.height,0,Ee,Re,fe.data)}}else{P?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ee,Re,Q[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Le,Ee,Re,Q[$]);for(let ye=0;ye<me.length;ye++){const fe=me[ye];P?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,Ee,Re,fe.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,Le,Ee,Re,fe.image[$])}}}h(f)&&A(r.TEXTURE_CUBE_MAP),se.__version=W.version,f.onUpdate&&f.onUpdate(f)}y.__version=f.version}function pe(y,f,O,G,W,se){const le=n.convert(O.format,O.colorSpace),D=n.convert(O.type),ne=M(O.internalFormat,le,D,O.normalized,O.colorSpace),oe=i.get(f),ve=i.get(O);if(ve.__renderTarget=f,!oe.__hasExternalTextures){const Q=Math.max(1,f.width>>se),we=Math.max(1,f.height>>se);W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?t.texImage3D(W,se,ne,Q,we,f.depth,0,le,D,null):t.texImage2D(W,se,ne,Q,we,0,le,D,null)}t.bindFramebuffer(r.FRAMEBUFFER,y),ot(f)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,G,W,ve.__webglTexture,0,it(f)):(W===r.TEXTURE_2D||W>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,G,W,ve.__webglTexture,se),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(y,f,O){if(r.bindRenderbuffer(r.RENDERBUFFER,y),f.depthBuffer){const G=f.depthTexture,W=G&&G.isDepthTexture?G.type:null,se=b(f.stencilBuffer,W),le=f.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ot(f)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it(f),se,f.width,f.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,it(f),se,f.width,f.height):r.renderbufferStorage(r.RENDERBUFFER,se,f.width,f.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,y)}else{const G=f.textures;for(let W=0;W<G.length;W++){const se=G[W],le=n.convert(se.format,se.colorSpace),D=n.convert(se.type),ne=M(se.internalFormat,le,D,se.normalized,se.colorSpace);ot(f)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it(f),ne,f.width,f.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,it(f),ne,f.width,f.height):r.renderbufferStorage(r.RENDERBUFFER,ne,f.width,f.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function We(y,f,O){const G=f.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,y),!(f.depthTexture&&f.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const W=i.get(f.depthTexture);if(W.__renderTarget=f,(!W.__webglTexture||f.depthTexture.image.width!==f.width||f.depthTexture.image.height!==f.height)&&(f.depthTexture.image.width=f.width,f.depthTexture.image.height=f.height,f.depthTexture.needsUpdate=!0),G){if(W.__webglInit===void 0&&(W.__webglInit=!0,f.depthTexture.addEventListener("dispose",w)),W.__webglTexture===void 0){W.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),Ge(r.TEXTURE_CUBE_MAP,f.depthTexture);const oe=n.convert(f.depthTexture.format),ve=n.convert(f.depthTexture.type);let Q;f.depthTexture.format===fi?Q=r.DEPTH_COMPONENT24:f.depthTexture.format===Fi&&(Q=r.DEPTH24_STENCIL8);for(let we=0;we<6;we++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Q,f.width,f.height,0,oe,ve,null)}}else J(f.depthTexture,0);const se=W.__webglTexture,le=it(f),D=G?r.TEXTURE_CUBE_MAP_POSITIVE_X+O:r.TEXTURE_2D,ne=f.depthTexture.format===Fi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(f.depthTexture.format===fi)ot(f)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,D,se,0,le):r.framebufferTexture2D(r.FRAMEBUFFER,ne,D,se,0);else if(f.depthTexture.format===Fi)ot(f)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,D,se,0,le):r.framebufferTexture2D(r.FRAMEBUFFER,ne,D,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ie(y){const f=i.get(y),O=y.isWebGLCubeRenderTarget===!0;if(f.__boundDepthTexture!==y.depthTexture){const G=y.depthTexture;if(f.__depthDisposeCallback&&f.__depthDisposeCallback(),G){const W=()=>{delete f.__boundDepthTexture,delete f.__depthDisposeCallback,G.removeEventListener("dispose",W)};G.addEventListener("dispose",W),f.__depthDisposeCallback=W}f.__boundDepthTexture=G}if(y.depthTexture&&!f.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)We(f.__webglFramebuffer[G],y,G);else{const G=y.texture.mipmaps;G&&G.length>0?We(f.__webglFramebuffer[0],y,0):We(f.__webglFramebuffer,y,0)}else if(O){f.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(r.FRAMEBUFFER,f.__webglFramebuffer[G]),f.__webglDepthbuffer[G]===void 0)f.__webglDepthbuffer[G]=r.createRenderbuffer(),Ve(f.__webglDepthbuffer[G],y,!1);else{const W=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=f.__webglDepthbuffer[G];r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,W,r.RENDERBUFFER,se)}}else{const G=y.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(r.FRAMEBUFFER,f.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,f.__webglFramebuffer),f.__webglDepthbuffer===void 0)f.__webglDepthbuffer=r.createRenderbuffer(),Ve(f.__webglDepthbuffer,y,!1);else{const W=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=f.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,W,r.RENDERBUFFER,se)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(y,f,O){const G=i.get(y);f!==void 0&&pe(G.__webglFramebuffer,y,y.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Ie(y)}function Rt(y){const f=y.texture,O=i.get(y),G=i.get(f);y.addEventListener("dispose",_);const W=y.textures,se=y.isWebGLCubeRenderTarget===!0,le=W.length>1;if(le||(G.__webglTexture===void 0&&(G.__webglTexture=r.createTexture()),G.__version=f.version,s.memory.textures++),se){O.__webglFramebuffer=[];for(let D=0;D<6;D++)if(f.mipmaps&&f.mipmaps.length>0){O.__webglFramebuffer[D]=[];for(let ne=0;ne<f.mipmaps.length;ne++)O.__webglFramebuffer[D][ne]=r.createFramebuffer()}else O.__webglFramebuffer[D]=r.createFramebuffer()}else{if(f.mipmaps&&f.mipmaps.length>0){O.__webglFramebuffer=[];for(let D=0;D<f.mipmaps.length;D++)O.__webglFramebuffer[D]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(le)for(let D=0,ne=W.length;D<ne;D++){const oe=i.get(W[D]);oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture(),s.memory.textures++)}if(y.samples>0&&ot(y)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let D=0;D<W.length;D++){const ne=W[D];O.__webglColorRenderbuffer[D]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[D]);const oe=n.convert(ne.format,ne.colorSpace),ve=n.convert(ne.type),Q=M(ne.internalFormat,oe,ve,ne.normalized,ne.colorSpace,y.isXRRenderTarget===!0),we=it(y);r.renderbufferStorageMultisample(r.RENDERBUFFER,we,Q,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.RENDERBUFFER,O.__webglColorRenderbuffer[D])}r.bindRenderbuffer(r.RENDERBUFFER,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Ve(O.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(se){t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture),Ge(r.TEXTURE_CUBE_MAP,f);for(let D=0;D<6;D++)if(f.mipmaps&&f.mipmaps.length>0)for(let ne=0;ne<f.mipmaps.length;ne++)pe(O.__webglFramebuffer[D][ne],y,f,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+D,ne);else pe(O.__webglFramebuffer[D],y,f,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);h(f)&&A(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let D=0,ne=W.length;D<ne;D++){const oe=W[D],ve=i.get(oe);let Q=r.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Q=y.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Q,ve.__webglTexture),Ge(Q,oe),pe(O.__webglFramebuffer,y,oe,r.COLOR_ATTACHMENT0+D,Q,0),h(oe)&&A(Q)}t.unbindTexture()}else{let D=r.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(D=y.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(D,G.__webglTexture),Ge(D,f),f.mipmaps&&f.mipmaps.length>0)for(let ne=0;ne<f.mipmaps.length;ne++)pe(O.__webglFramebuffer[ne],y,f,r.COLOR_ATTACHMENT0,D,ne);else pe(O.__webglFramebuffer,y,f,r.COLOR_ATTACHMENT0,D,0);h(f)&&A(D),t.unbindTexture()}y.depthBuffer&&Ie(y)}function vt(y){const f=y.textures;for(let O=0,G=f.length;O<G;O++){const W=f[O];if(h(W)){const se=C(y),le=i.get(W).__webglTexture;t.bindTexture(se,le),A(se),t.unbindTexture()}}}const ct=[],dt=[];function mt(y){if(y.samples>0){if(ot(y)===!1){const f=y.textures,O=y.width,G=y.height;let W=r.COLOR_BUFFER_BIT;const se=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=i.get(y),D=f.length>1;if(D)for(let oe=0;oe<f.length;oe++)t.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const ne=y.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let oe=0;oe<f.length;oe++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(W|=r.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(W|=r.STENCIL_BUFFER_BIT)),D){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,le.__webglColorRenderbuffer[oe]);const ve=i.get(f[oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ve,0)}r.blitFramebuffer(0,0,O,G,0,0,O,G,W,r.NEAREST),c===!0&&(ct.length=0,dt.length=0,ct.push(r.COLOR_ATTACHMENT0+oe),y.depthBuffer&&y.resolveDepthBuffer===!1&&(ct.push(se),dt.push(se),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,dt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),D)for(let oe=0;oe<f.length;oe++){t.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,le.__webglColorRenderbuffer[oe]);const ve=i.get(f[oe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,ve,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){const f=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[f])}}}function it(y){return Math.min(a.maxSamples,y.samples)}function ot(y){const f=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&f.__useRenderToTexture!==!1}function U(y){const f=s.render.frame;d.get(y)!==f&&(d.set(y,f),y.update())}function Ct(y,f){const O=y.colorSpace,G=y.format,W=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||O!==ga&&O!==Ei&&(ze.getTransfer(O)===je?(G!==kt||W!==Nt)&&be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",O)),f}function Xe(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=j,this.getTextureUnits=X,this.setTextureUnits=H,this.setTexture2D=J,this.setTexture2DArray=ee,this.setTexture3D=re,this.setTextureCube=ue,this.rebindTextures=Qe,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Of(r,e){function t(i,a=Ei){let n;const s=ze.getTransfer(a);if(i===Nt)return r.UNSIGNED_BYTE;if(i===ns)return r.UNSIGNED_SHORT_4_4_4_4;if(i===ss)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Ho)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Go)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Bo)return r.BYTE;if(i===zo)return r.SHORT;if(i===Rr)return r.UNSIGNED_SHORT;if(i===as)return r.INT;if(i===ii)return r.UNSIGNED_INT;if(i===$t)return r.FLOAT;if(i===pi)return r.HALF_FLOAT;if(i===Vo)return r.ALPHA;if(i===ko)return r.RGB;if(i===kt)return r.RGBA;if(i===fi)return r.DEPTH_COMPONENT;if(i===Fi)return r.DEPTH_STENCIL;if(i===Wo)return r.RED;if(i===os)return r.RED_INTEGER;if(i===zi)return r.RG;if(i===ls)return r.RG_INTEGER;if(i===cs)return r.RGBA_INTEGER;if(i===ca||i===ua||i===ha||i===da)if(s===je)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(i===ca)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ua)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ha)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===da)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(i===ca)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ua)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ha)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===da)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sn||i===yn||i===En||i===Tn)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(i===Sn)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yn)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===En)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tn)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bn||i===An||i===wn||i===Rn||i===Cn||i===fa||i===Pn)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(i===bn||i===An)return s===je?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(i===wn)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(i===Rn)return n.COMPRESSED_R11_EAC;if(i===Cn)return n.COMPRESSED_SIGNED_R11_EAC;if(i===fa)return n.COMPRESSED_RG11_EAC;if(i===Pn)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ln||i===Un||i===Dn||i===Nn||i===In||i===On||i===Fn||i===Bn||i===zn||i===Hn||i===Gn||i===Vn||i===kn||i===Wn)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(i===Ln)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Un)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dn)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nn)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===In)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===On)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fn)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bn)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zn)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hn)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gn)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vn)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kn)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wn)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xn||i===jn||i===qn)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(i===Xn)return s===je?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jn)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qn)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yn||i===Zn||i===ma||i===Jn)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(i===Yn)return n.COMPRESSED_RED_RGTC1_EXT;if(i===Zn)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ma)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jn)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cr?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const Ff=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ol(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ri({vertexShader:Ff,fragmentShader:Bf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new ya(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hf extends Gi{constructor(e,t){super();const i=this;let a=null,n=1,s=null,o="local-floor",c=1,l=null,d=null,g=null,u=null,p=null,v=null;const S=typeof XRWebGLBinding<"u",m=new zf,h={},A=t.getContextAttributes();let C=null,M=null;const b=[],T=[],w=new He;let _=null;const E=new Bt;E.viewport=new st;const L=new Bt;L.viewport=new st;const R=[E,L],N=new Zc;let j=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=b[Y];return ie===void 0&&(ie=new Ba,b[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=b[Y];return ie===void 0&&(ie=new Ba,b[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=b[Y];return ie===void 0&&(ie=new Ba,b[Y]=ie),ie.getHandSpace()};function H(Y){const ie=T.indexOf(Y.inputSource);if(ie===-1)return;const K=b[ie];K!==void 0&&(K.update(Y.inputSource,Y.frame,l||s),K.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){a.removeEventListener("select",H),a.removeEventListener("selectstart",H),a.removeEventListener("selectend",H),a.removeEventListener("squeeze",H),a.removeEventListener("squeezestart",H),a.removeEventListener("squeezeend",H),a.removeEventListener("end",q),a.removeEventListener("inputsourceschange",k);for(let Y=0;Y<b.length;Y++){const ie=T[Y];ie!==null&&(T[Y]=null,b[Y].disconnect(ie))}j=null,X=null,m.reset();for(const Y in h)delete h[Y];e.setRenderTarget(C),p=null,u=null,g=null,a=null,M=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){n=Y,i.isPresenting===!0&&be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return g===null&&S&&(g=new XRWebGLBinding(a,t)),g},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(C=e.getRenderTarget(),a.addEventListener("select",H),a.addEventListener("selectstart",H),a.addEventListener("selectend",H),a.addEventListener("squeeze",H),a.addEventListener("squeezestart",H),a.addEventListener("squeezeend",H),a.addEventListener("end",q),a.addEventListener("inputsourceschange",k),A.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(w),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,K=null,Se=null;A.depth&&(Se=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=A.stencil?Fi:fi,K=A.stencil?Cr:ii);const Ce={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:n};g=this.getBinding(),u=g.createProjectionLayer(Ce),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new ti(u.textureWidth,u.textureHeight,{format:kt,type:Nt,depthTexture:new pr(u.textureWidth,u.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ie={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:n};p=new XRWebGLLayer(a,t,ie),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ti(p.framebufferWidth,p.framebufferHeight,{format:kt,type:Nt,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await a.requestReferenceSpace(o),Ge.setContext(a),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(Y){for(let ie=0;ie<Y.removed.length;ie++){const K=Y.removed[ie],Se=T.indexOf(K);Se>=0&&(T[Se]=null,b[Se].disconnect(K))}for(let ie=0;ie<Y.added.length;ie++){const K=Y.added[ie];let Se=T.indexOf(K);if(Se===-1){for(let pe=0;pe<b.length;pe++)if(pe>=T.length){T.push(K),Se=pe;break}else if(T[pe]===null){T[pe]=K,Se=pe;break}if(Se===-1)break}const Ce=b[Se];Ce&&Ce.connect(K)}}const J=new F,ee=new F;function re(Y,ie,K){J.setFromMatrixPosition(ie.matrixWorld),ee.setFromMatrixPosition(K.matrixWorld);const Se=J.distanceTo(ee),Ce=ie.projectionMatrix.elements,pe=K.projectionMatrix.elements,Ve=Ce[14]/(Ce[10]-1),We=Ce[14]/(Ce[10]+1),Ie=(Ce[9]+1)/Ce[5],Qe=(Ce[9]-1)/Ce[5],Rt=(Ce[8]-1)/Ce[0],vt=(pe[8]+1)/pe[0],ct=Ve*Rt,dt=Ve*vt,mt=Se/(-Rt+vt),it=mt*-Rt;if(ie.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(it),Y.translateZ(mt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ce[10]===-1)Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const ot=Ve+mt,U=We+mt,Ct=ct-it,Xe=dt+(Se-it),y=Ie*We/U*ot,f=Qe*We/U*ot;Y.projectionMatrix.makePerspective(Ct,Xe,y,f,ot,U),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ue(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let ie=Y.near,K=Y.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(K=m.depthFar)),N.near=L.near=E.near=ie,N.far=L.far=E.far=K,(j!==N.near||X!==N.far)&&(a.updateRenderState({depthNear:N.near,depthFar:N.far}),j=N.near,X=N.far),N.layers.mask=Y.layers.mask|6,E.layers.mask=N.layers.mask&-5,L.layers.mask=N.layers.mask&-3;const Se=Y.parent,Ce=N.cameras;ue(N,Se);for(let pe=0;pe<Ce.length;pe++)ue(Ce[pe],Se);Ce.length===2?re(N,E,L):N.projectionMatrix.copy(E.projectionMatrix),Me(Y,N,Se)};function Me(Y,ie,K){K===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(K.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=$n*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Y){return h[Y]};let Be=null;function $e(Y,ie){if(d=ie.getViewerPose(l||s),v=ie,d!==null){const K=d.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Se=!1;K.length!==N.cameras.length&&(N.cameras.length=0,Se=!0);for(let pe=0;pe<K.length;pe++){const Ve=K[pe];let We=null;if(p!==null)We=p.getViewport(Ve);else{const Qe=g.getViewSubImage(u,Ve);We=Qe.viewport,pe===0&&(e.setRenderTargetTextures(M,Qe.colorTexture,Qe.depthStencilTexture),e.setRenderTarget(M))}let Ie=R[pe];Ie===void 0&&(Ie=new Bt,Ie.layers.enable(pe),Ie.viewport=new st,R[pe]=Ie),Ie.matrix.fromArray(Ve.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Ve.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(We.x,We.y,We.width,We.height),pe===0&&(N.matrix.copy(Ie.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Se===!0&&N.cameras.push(Ie)}const Ce=a.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&S){g=i.getBinding();const pe=g.getDepthInformation(K[0]);pe&&pe.isValid&&pe.texture&&m.init(pe,a.renderState)}if(Ce&&Ce.includes("camera-access")&&S){e.state.unbindTexture(),g=i.getBinding();for(let pe=0;pe<K.length;pe++){const Ve=K[pe].camera;if(Ve){let We=h[Ve];We||(We=new ol,h[Ve]=We);const Ie=g.getCameraImage(Ve);We.sourceTexture=Ie}}}}for(let K=0;K<b.length;K++){const Se=T[K],Ce=b[K];Se!==null&&Ce!==void 0&&Ce.update(Se,ie,l||s)}Be&&Be(Y,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),v=null}const Ge=new hl;Ge.setAnimationLoop($e),this.setAnimationLoop=function(Y){Be=Y},this.dispose=function(){}}}const Gf=new tt,vl=new Pe;vl.set(-1,0,0,0,1,0,0,0,1);function Vf(r,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,ll(r)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function a(m,h,A,C,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?n(m,h):h.isMeshLambertMaterial?(n(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(n(m,h),g(m,h)):h.isMeshPhongMaterial?(n(m,h),d(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(n(m,h),u(m,h),h.isMeshPhysicalMaterial&&p(m,h,M)):h.isMeshMatcapMaterial?(n(m,h),v(m,h)):h.isMeshDepthMaterial?n(m,h):h.isMeshDistanceMaterial?(n(m,h),S(m,h)):h.isMeshNormalMaterial?n(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,A,C):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function n(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===bt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===bt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const A=e.get(h),C=A.envMap,M=A.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(Gf.makeRotationFromEuler(M)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(vl),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,A,C){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*A,m.scale.value=C*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function g(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,A){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===bt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function S(m,h){const A=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function kf(r,e,t,i){let a={},n={},s=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){const T=b.program;i.uniformBlockBinding(M,T)}function l(M,b){let T=a[M.id];T===void 0&&(m(M),T=d(M),a[M.id]=T,M.addEventListener("dispose",A));const w=b.program;i.updateUBOMapping(M,w);const _=e.render.frame;n[M.id]!==_&&(u(M),n[M.id]=_)}function d(M){const b=g();M.__bindingPointIndex=b;const T=r.createBuffer(),w=M.__size,_=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,w,_),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,T),T}function g(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const b=a[M.id],T=M.uniforms,w=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let _=0,E=T.length;_<E;_++){const L=T[_];if(Array.isArray(L))for(let R=0,N=L.length;R<N;R++)p(L[R],_,R,w);else p(L,_,0,w)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(M,b,T,w){if(S(M,b,T,w)===!0){const _=M.__offset,E=M.value;if(Array.isArray(E)){let L=0;for(let R=0;R<E.length;R++){const N=E[R],j=h(N);v(N,M.__data,L),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(E,M.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,_,M.__data)}}function v(M,b,T){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,T)}function S(M,b,T,w){const _=M.value,E=b+"_"+T;if(w[E]===void 0)return typeof _=="number"||typeof _=="boolean"?w[E]=_:ArrayBuffer.isView(_)?w[E]=_.slice():w[E]=_.clone(),!0;{const L=w[E];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return w[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function m(M){const b=M.uniforms;let T=0;const w=16;for(let E=0,L=b.length;E<L;E++){const R=Array.isArray(b[E])?b[E]:[b[E]];for(let N=0,j=R.length;N<j;N++){const X=R[N],H=Array.isArray(X.value)?X.value:[X.value];for(let q=0,k=H.length;q<k;q++){const J=H[q],ee=h(J),re=T%w,ue=re%ee.boundary,Me=re+ue;T+=ue,Me!==0&&w-Me<ee.storage&&(T+=w-Me),X.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=ee.storage}}}const _=T%w;return _>0&&(T+=w-_),M.__size=T,M.__cache={},this}function h(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):be("WebGLRenderer: Unsupported uniform value type.",M),b}function A(M){const b=M.target;b.removeEventListener("dispose",A);const T=s.indexOf(b.__bindingPointIndex);s.splice(T,1),r.deleteBuffer(a[b.id]),delete a[b.id],delete n[b.id]}function C(){for(const M in a)r.deleteBuffer(a[M]);s=[],a={},n={}}return{bind:c,update:l,dispose:C}}const Wf=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zt=null;function Xf(){return Zt===null&&(Zt=new Cc(Wf,16,16,zi,pi),Zt.name="DFG_LUT",Zt.minFilter=St,Zt.magFilter=St,Zt.wrapS=ui,Zt.wrapT=ui,Zt.generateMipmaps=!1,Zt.needsUpdate=!0),Zt}class jf{constructor(e={}){const{canvas:t=sc(),context:i=null,depth:a=!0,stencil:n=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Nt}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=s;const S=p,m=new Set([cs,ls,os]),h=new Set([Nt,ii,Rr,Cr,ns,ss]),A=new Uint32Array(4),C=new Int32Array(4),M=new F;let b=null,T=null;const w=[],_=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let R=!1,N=null,j=null,X=null,H=null;this._outputColorSpace=Ft;let q=0,k=0,J=null,ee=-1,re=null;const ue=new st,Me=new st;let Be=null;const $e=new Fe(0);let Ge=0,Y=t.width,ie=t.height,K=1,Se=null,Ce=null;const pe=new st(0,0,Y,ie),Ve=new st(0,0,Y,ie);let We=!1;const Ie=new fs;let Qe=!1,Rt=!1;const vt=new tt,ct=new F,dt=new st,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function ot(){return J===null?K:1}let U=i;function Ct(x,I){return t.getContext(x,I)}try{const x={alpha:!0,depth:a,stencil:n,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${is}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",Xt,!1),U===null){const I="webgl2";if(U=Ct(I,x),U===null)throw Ct(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(x){throw ke("WebGLRenderer: "+x.message),x}let Xe,y,f,O,G,W,se,le,D,ne,oe,ve,Q,we,Ee,Re,Le,P,Z,te,de,me,$;function ye(){Xe=new Wd(U),Xe.init(),de=new Of(U,Xe),y=new Od(U,Xe,e,de),f=new Nf(U,Xe),y.reversedDepthBuffer&&u&&f.buffers.depth.setReversed(!0),j=U.createFramebuffer(),X=U.createFramebuffer(),H=U.createFramebuffer(),O=new qd(U),G=new Mf,W=new If(U,Xe,f,G,y,de,O),se=new kd(L),le=new Kc(U),me=new Nd(U,le),D=new Xd(U,le,O,me),ne=new Zd(U,D,le,me,O),P=new Yd(U,y,W),Ee=new Fd(G),oe=new xf(L,se,Xe,y,me,Ee),ve=new Vf(L,G),Q=new yf,we=new Rf(Xe),Le=new Dd(L,se,f,ne,v,c),Re=new Df(L,ne,y),$=new kf(U,O,y,f),Z=new Id(U,Xe,O),te=new jd(U,Xe,O),O.programs=oe.programs,L.capabilities=y,L.extensions=Xe,L.properties=G,L.renderLists=Q,L.shadowMap=Re,L.state=f,L.info=O}ye(),S!==Nt&&(E=new Kd(S,t.width,t.height,o,a,n));const fe=new Hf(L,U);this.xr=fe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const x=Xe.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Xe.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(x){x!==void 0&&(K=x,this.setSize(Y,ie,!1))},this.getSize=function(x){return x.set(Y,ie)},this.setSize=function(x,I,V=!0){if(fe.isPresenting){be("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=x,ie=I,t.width=Math.floor(x*K),t.height=Math.floor(I*K),V===!0&&(t.style.width=x+"px",t.style.height=I+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(Y*K,ie*K).floor()},this.setDrawingBufferSize=function(x,I,V){Y=x,ie=I,K=V,t.width=Math.floor(x*V),t.height=Math.floor(I*V),this.setViewport(0,0,x,I)},this.setEffects=function(x){if(S===Nt){ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let I=0;I<x.length;I++)if(x[I].isOutputPass===!0){be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ue)},this.getViewport=function(x){return x.copy(pe)},this.setViewport=function(x,I,V,z){x.isVector4?pe.set(x.x,x.y,x.z,x.w):pe.set(x,I,V,z),f.viewport(ue.copy(pe).multiplyScalar(K).round())},this.getScissor=function(x){return x.copy(Ve)},this.setScissor=function(x,I,V,z){x.isVector4?Ve.set(x.x,x.y,x.z,x.w):Ve.set(x,I,V,z),f.scissor(Me.copy(Ve).multiplyScalar(K).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(x){f.setScissorTest(We=x)},this.setOpaqueSort=function(x){Se=x},this.setTransparentSort=function(x){Ce=x},this.getClearColor=function(x){return x.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,V=!0){let z=0;if(x){let B=!1;if(J!==null){const ae=J.texture.format;B=m.has(ae)}if(B){const ae=J.texture.type,he=h.has(ae),ge=Le.getClearColor(),_e=Le.getClearAlpha(),Ae=ge.r,De=ge.g,Oe=ge.b;he?(A[0]=Ae,A[1]=De,A[2]=Oe,A[3]=_e,U.clearBufferuiv(U.COLOR,0,A)):(C[0]=Ae,C[1]=De,C[2]=Oe,C[3]=_e,U.clearBufferiv(U.COLOR,0,C))}else z|=U.COLOR_BUFFER_BIT}I&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),N=x},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",Xt,!1),Le.dispose(),Q.dispose(),we.dispose(),G.dispose(),se.dispose(),ne.dispose(),me.dispose(),$.dispose(),oe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",vs),fe.removeEventListener("sessionend",xs),wi.stop()};function Et(x){x.preventDefault(),Ns("WebGLRenderer: Context Lost."),R=!0}function Ze(){Ns("WebGLRenderer: Context Restored."),R=!1;const x=O.autoReset,I=Re.enabled,V=Re.autoUpdate,z=Re.needsUpdate,B=Re.type;ye(),O.autoReset=x,Re.enabled=I,Re.autoUpdate=V,Re.needsUpdate=z,Re.type=B}function Xt(x){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function jt(x){const I=x.target;I.removeEventListener("dispose",jt),xl(I)}function xl(x){Ml(x),G.remove(x)}function Ml(x){const I=G.get(x).programs;I!==void 0&&(I.forEach(function(V){oe.releaseProgram(V)}),x.isShaderMaterial&&oe.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,V,z,B,ae){I===null&&(I=mt);const he=B.isMesh&&B.matrixWorld.determinantAffine()<0,ge=El(x,I,V,z,B);f.setMaterial(z,he);let _e=V.index,Ae=1;if(z.wireframe===!0){if(_e=D.getWireframeAttribute(V),_e===void 0)return;Ae=2}const De=V.drawRange,Oe=V.attributes.position;let Te=De.start*Ae,Je=(De.start+De.count)*Ae;ae!==null&&(Te=Math.max(Te,ae.start*Ae),Je=Math.min(Je,(ae.start+ae.count)*Ae)),_e!==null?(Te=Math.max(Te,0),Je=Math.min(Je,_e.count)):Oe!=null&&(Te=Math.max(Te,0),Je=Math.min(Je,Oe.count));const at=Je-Te;if(at<0||at===1/0)return;me.setup(B,z,ge,V,_e);let et,Ke=Z;if(_e!==null&&(et=le.get(_e),Ke=te,Ke.setIndex(et)),B.isMesh)z.wireframe===!0?(f.setLineWidth(z.wireframeLinewidth*ot()),Ke.setMode(U.LINES)):Ke.setMode(U.TRIANGLES);else if(B.isLine){let rt=z.linewidth;rt===void 0&&(rt=1),f.setLineWidth(rt*ot()),B.isLineSegments?Ke.setMode(U.LINES):B.isLineLoop?Ke.setMode(U.LINE_LOOP):Ke.setMode(U.LINE_STRIP)}else B.isPoints?Ke.setMode(U.POINTS):B.isSprite&&Ke.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))Ke.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const rt=B._multiDrawStarts,xe=B._multiDrawCounts,Lt=B._multiDrawCount,Ri=_e?le.get(_e).bytesPerElement:1,It=G.get(z).currentProgram.getUniforms();for(let qt=0;qt<Lt;qt++)It.setValue(U,"_gl_DrawID",qt),Ke.render(rt[qt]/Ri,xe[qt])}else if(B.isInstancedMesh)Ke.renderInstances(Te,at,B.count);else if(V.isInstancedBufferGeometry){const rt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,xe=Math.min(V.instanceCount,rt);Ke.renderInstances(Te,at,xe)}else Ke.render(Te,at)};function _s(x,I,V){x.transparent===!0&&x.side===ci&&x.forceSinglePass===!1?(x.side=bt,x.needsUpdate=!0,Ir(x,I,V),x.side=bi,x.needsUpdate=!0,Ir(x,I,V),x.side=ci):Ir(x,I,V)}this.compile=function(x,I,V=null){V===null&&(V=x),T=we.get(V),T.init(I),_.push(T),V.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),x!==V&&x.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),T.setupLights();const z=new Set;return x.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ae=B.material;if(ae)if(Array.isArray(ae))for(let he=0;he<ae.length;he++){const ge=ae[he];_s(ge,V,B),z.add(ge)}else _s(ae,V,B),z.add(ae)}),T=_.pop(),z},this.compileAsync=function(x,I,V=null){const z=this.compile(x,I,V);return new Promise(B=>{function ae(){if(z.forEach(function(he){G.get(he).currentProgram.isReady()&&z.delete(he)}),z.size===0){B(x);return}setTimeout(ae,10)}Xe.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let ba=null;function Sl(x){ba&&ba(x)}function vs(){wi.stop()}function xs(){wi.start()}const wi=new hl;wi.setAnimationLoop(Sl),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(x){ba=x,fe.setAnimationLoop(x),x===null?wi.stop():wi.start()},fe.addEventListener("sessionstart",vs),fe.addEventListener("sessionend",xs),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;N!==null&&N.renderStart(x,I);const V=fe.enabled===!0&&fe.isPresenting===!0,z=E!==null&&(J===null||V)&&E.begin(L,J);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(I),I=fe.getCamera()),x.isScene===!0&&x.onBeforeRender(L,x,I,J),T=we.get(x,_.length),T.init(I),T.state.textureUnits=W.getTextureUnits(),_.push(T),vt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ie.setFromProjectionMatrix(vt,Qt,I.reversedDepth),Rt=this.localClippingEnabled,Qe=Ee.init(this.clippingPlanes,Rt),b=Q.get(x,w.length),b.init(),w.push(b),fe.enabled===!0&&fe.isPresenting===!0){const ae=L.xr.getDepthSensingMesh();ae!==null&&Aa(ae,I,-1/0,L.sortObjects)}Aa(x,I,0,L.sortObjects),b.finish(),L.sortObjects===!0&&b.sort(Se,Ce,I.reversedDepth),it=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,it&&Le.addToRenderList(b,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Ee.beginShadows();const B=T.state.shadowsArray;if(Re.render(B,x,I),Qe===!0&&Ee.endShadows(),(z&&E.hasRenderPass())===!1){const ae=b.opaque,he=b.transmissive;if(T.setupLights(),I.isArrayCamera){const ge=I.cameras;if(he.length>0)for(let _e=0,Ae=ge.length;_e<Ae;_e++){const De=ge[_e];Ss(ae,he,x,De)}it&&Le.render(x);for(let _e=0,Ae=ge.length;_e<Ae;_e++){const De=ge[_e];Ms(b,x,De,De.viewport)}}else he.length>0&&Ss(ae,he,x,I),it&&Le.render(x),Ms(b,x,I)}J!==null&&k===0&&(W.updateMultisampleRenderTarget(J),W.updateRenderTargetMipmap(J)),z&&E.end(L),x.isScene===!0&&x.onAfterRender(L,x,I),me.resetDefaultState(),ee=-1,re=null,_.pop(),_.length>0?(T=_[_.length-1],W.setTextureUnits(T.state.textureUnits),Qe===!0&&Ee.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?b=w[w.length-1]:b=null,N!==null&&N.renderEnd()};function Aa(x,I,V,z){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLightProbeGrid)T.pushLightProbeGrid(x);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ie.intersectsSprite(x)){z&&dt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(vt);const ae=ne.update(x),he=x.material;he.visible&&b.push(x,ae,he,V,dt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ie.intersectsObject(x))){const ae=ne.update(x),he=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),dt.copy(x.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),dt.copy(ae.boundingSphere.center)),dt.applyMatrix4(x.matrixWorld).applyMatrix4(vt)),Array.isArray(he)){const ge=ae.groups;for(let _e=0,Ae=ge.length;_e<Ae;_e++){const De=ge[_e],Oe=he[De.materialIndex];Oe&&Oe.visible&&b.push(x,ae,Oe,V,dt.z,De)}}else he.visible&&b.push(x,ae,he,V,dt.z,null)}}const B=x.children;for(let ae=0,he=B.length;ae<he;ae++)Aa(B[ae],I,V,z)}function Ms(x,I,V,z){const{opaque:B,transmissive:ae,transparent:he}=x;T.setupLightsView(V),Qe===!0&&Ee.setGlobalState(L.clippingPlanes,V),z&&f.viewport(ue.copy(z)),B.length>0&&Nr(B,I,V),ae.length>0&&Nr(ae,I,V),he.length>0&&Nr(he,I,V),f.buffers.depth.setTest(!0),f.buffers.depth.setMask(!0),f.buffers.color.setMask(!0),f.setPolygonOffset(!1)}function Ss(x,I,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){const Oe=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new ti(1,1,{generateMipmaps:!0,type:Oe?pi:Nt,minFilter:Oi,samples:Math.max(4,y.samples),stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace})}const B=T.state.transmissionRenderTarget[z.id],ae=z.viewport||ue;B.setSize(ae.z*L.transmissionResolutionScale,ae.w*L.transmissionResolutionScale);const he=L.getRenderTarget(),ge=L.getActiveCubeFace(),_e=L.getActiveMipmapLevel();L.setRenderTarget(B),L.getClearColor($e),Ge=L.getClearAlpha(),Ge<1&&L.setClearColor(16777215,.5),L.clear(),it&&Le.render(V);const Ae=L.toneMapping;L.toneMapping=ei;const De=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),Qe===!0&&Ee.setGlobalState(L.clippingPlanes,z),Nr(x,V,z),W.updateMultisampleRenderTarget(B),W.updateRenderTargetMipmap(B),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Te=0,Je=I.length;Te<Je;Te++){const at=I[Te],{object:et,geometry:Ke,material:rt,group:xe}=at;if(rt.side===ci&&et.layers.test(z.layers)){const Lt=rt.side;rt.side=bt,rt.needsUpdate=!0,ys(et,V,z,Ke,rt,xe),rt.side=Lt,rt.needsUpdate=!0,Oe=!0}}Oe===!0&&(W.updateMultisampleRenderTarget(B),W.updateRenderTargetMipmap(B))}L.setRenderTarget(he,ge,_e),L.setClearColor($e,Ge),De!==void 0&&(z.viewport=De),L.toneMapping=Ae}function Nr(x,I,V){const z=I.isScene===!0?I.overrideMaterial:null;for(let B=0,ae=x.length;B<ae;B++){const he=x[B],{object:ge,geometry:_e,group:Ae}=he;let De=he.material;De.allowOverride===!0&&z!==null&&(De=z),ge.layers.test(V.layers)&&ys(ge,I,V,_e,De,Ae)}}function ys(x,I,V,z,B,ae){x.onBeforeRender(L,I,V,z,B,ae),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),B.onBeforeRender(L,I,V,z,x,ae),B.transparent===!0&&B.side===ci&&B.forceSinglePass===!1?(B.side=bt,B.needsUpdate=!0,L.renderBufferDirect(V,I,z,B,x,ae),B.side=bi,B.needsUpdate=!0,L.renderBufferDirect(V,I,z,B,x,ae),B.side=ci):L.renderBufferDirect(V,I,z,B,x,ae),x.onAfterRender(L,I,V,z,B,ae)}function Ir(x,I,V){I.isScene!==!0&&(I=mt);const z=G.get(x),B=T.state.lights,ae=T.state.shadowsArray,he=B.state.version,ge=oe.getParameters(x,B.state,ae,I,V,T.state.lightProbeGridArray),_e=oe.getProgramCacheKey(ge);let Ae=z.programs;z.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,z.fog=I.fog;const De=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;z.envMap=se.get(x.envMap||z.environment,De),z.envMapRotation=z.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Ae===void 0&&(x.addEventListener("dispose",jt),Ae=new Map,z.programs=Ae);let Oe=Ae.get(_e);if(Oe!==void 0){if(z.currentProgram===Oe&&z.lightsStateVersion===he)return Ts(x,ge),Oe}else ge.uniforms=oe.getUniforms(x),N!==null&&x.isNodeMaterial&&N.build(x,V,ge),x.onBeforeCompile(ge,L),Oe=oe.acquireProgram(ge,_e),Ae.set(_e,Oe),z.uniforms=ge.uniforms;const Te=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Te.clippingPlanes=Ee.uniform),Ts(x,ge),z.needsLights=bl(x),z.lightsStateVersion=he,z.needsLights&&(Te.ambientLightColor.value=B.state.ambient,Te.lightProbe.value=B.state.probe,Te.directionalLights.value=B.state.directional,Te.directionalLightShadows.value=B.state.directionalShadow,Te.spotLights.value=B.state.spot,Te.spotLightShadows.value=B.state.spotShadow,Te.rectAreaLights.value=B.state.rectArea,Te.ltc_1.value=B.state.rectAreaLTC1,Te.ltc_2.value=B.state.rectAreaLTC2,Te.pointLights.value=B.state.point,Te.pointLightShadows.value=B.state.pointShadow,Te.hemisphereLights.value=B.state.hemi,Te.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Te.spotLightMatrix.value=B.state.spotLightMatrix,Te.spotLightMap.value=B.state.spotLightMap,Te.pointShadowMatrix.value=B.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=Oe,z.uniformsList=null,Oe}function Es(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=pa.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function Ts(x,I){const V=G.get(x);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function yl(x,I){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;M.setFromMatrixPosition(I.matrixWorld);for(let V=0,z=x.length;V<z;V++){const B=x[V];if(B.texture!==null&&B.boundingBox.containsPoint(M))return B}return null}function El(x,I,V,z,B){I.isScene!==!0&&(I=mt),W.resetTextureUnits();const ae=I.fog,he=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?I.environment:null,ge=J===null?L.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ze.workingColorSpace,_e=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ae=se.get(z.envMap||he,_e),De=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Oe=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!V.morphAttributes.position,Je=!!V.morphAttributes.normal,at=!!V.morphAttributes.color;let et=ei;z.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(et=L.toneMapping);const Ke=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,rt=Ke!==void 0?Ke.length:0,xe=G.get(z),Lt=T.state.lights;if(Qe===!0&&(Rt===!0||x!==re)){const qe=x===re&&z.id===ee;Ee.setState(z,x,qe)}let Ri=!1;z.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Lt.state.version||xe.outputColorSpace!==ge||B.isBatchedMesh&&xe.batching===!1||!B.isBatchedMesh&&xe.batching===!0||B.isBatchedMesh&&xe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&xe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&xe.instancing===!1||!B.isInstancedMesh&&xe.instancing===!0||B.isSkinnedMesh&&xe.skinning===!1||!B.isSkinnedMesh&&xe.skinning===!0||B.isInstancedMesh&&xe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&xe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&xe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&xe.instancingMorph===!1&&B.morphTexture!==null||xe.envMap!==Ae||z.fog===!0&&xe.fog!==ae||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Ee.numPlanes||xe.numIntersection!==Ee.numIntersection)||xe.vertexAlphas!==De||xe.vertexTangents!==Oe||xe.morphTargets!==Te||xe.morphNormals!==Je||xe.morphColors!==at||xe.toneMapping!==et||xe.morphTargetsCount!==rt||!!xe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ri=!0):(Ri=!0,xe.__version=z.version);let It=xe.currentProgram;Ri===!0&&(It=Ir(z,I,B),N&&z.isNodeMaterial&&N.onUpdateProgram(z,It,xe));let qt=!1,mi=!1,ki=!1;const Ye=It.getUniforms(),nt=xe.uniforms;if(f.useProgram(It.program)&&(qt=!0,mi=!0,ki=!0),z.id!==ee&&(ee=z.id,mi=!0),xe.needsLights){const qe=yl(T.state.lightProbeGridArray,B);xe.lightProbeGrid!==qe&&(xe.lightProbeGrid=qe,mi=!0)}if(qt||re!==x){f.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Ye.setValue(U,"projectionMatrix",x.projectionMatrix),Ye.setValue(U,"viewMatrix",x.matrixWorldInverse);const qe=Ye.map.cameraPosition;qe!==void 0&&qe.setValue(U,ct.setFromMatrixPosition(x.matrixWorld)),y.logarithmicDepthBuffer&&Ye.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ye.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),re!==x&&(re=x,mi=!0,ki=!0)}if(xe.needsLights&&(Lt.state.directionalShadowMap.length>0&&Ye.setValue(U,"directionalShadowMap",Lt.state.directionalShadowMap,W),Lt.state.spotShadowMap.length>0&&Ye.setValue(U,"spotShadowMap",Lt.state.spotShadowMap,W),Lt.state.pointShadowMap.length>0&&Ye.setValue(U,"pointShadowMap",Lt.state.pointShadowMap,W)),B.isSkinnedMesh){Ye.setOptional(U,B,"bindMatrix"),Ye.setOptional(U,B,"bindMatrixInverse");const qe=B.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),Ye.setValue(U,"boneTexture",qe.boneTexture,W))}B.isBatchedMesh&&(Ye.setOptional(U,B,"batchingTexture"),Ye.setValue(U,"batchingTexture",B._matricesTexture,W),Ye.setOptional(U,B,"batchingIdTexture"),Ye.setValue(U,"batchingIdTexture",B._indirectTexture,W),Ye.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&Ye.setValue(U,"batchingColorTexture",B._colorsTexture,W));const gi=V.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&P.update(B,V,It),(mi||xe.receiveShadow!==B.receiveShadow)&&(xe.receiveShadow=B.receiveShadow,Ye.setValue(U,"receiveShadow",B.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&I.environment!==null&&(nt.envMapIntensity.value=I.environmentIntensity),nt.dfgLUT!==void 0&&(nt.dfgLUT.value=Xf()),mi){if(Ye.setValue(U,"toneMappingExposure",L.toneMappingExposure),xe.needsLights&&Tl(nt,ki),ae&&z.fog===!0&&ve.refreshFogUniforms(nt,ae),ve.refreshMaterialUniforms(nt,z,K,ie,T.state.transmissionRenderTarget[x.id]),xe.needsLights&&xe.lightProbeGrid){const qe=xe.lightProbeGrid;nt.probesSH.value=qe.texture,nt.probesMin.value.copy(qe.boundingBox.min),nt.probesMax.value.copy(qe.boundingBox.max),nt.probesResolution.value.copy(qe.resolution)}pa.upload(U,Es(xe),nt,W)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(pa.upload(U,Es(xe),nt,W),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ye.setValue(U,"center",B.center),Ye.setValue(U,"modelViewMatrix",B.modelViewMatrix),Ye.setValue(U,"normalMatrix",B.normalMatrix),Ye.setValue(U,"modelMatrix",B.matrixWorld),z.uniformsGroups!==void 0){const qe=z.uniformsGroups;for(let _r=0,Wi=qe.length;_r<Wi;_r++){const bs=qe[_r];$.update(bs,It),$.bind(bs,It)}}return It}function Tl(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function bl(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(x,I,V){const z=G.get(x);z.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),G.get(x.texture).__webglTexture=I,G.get(x.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:V,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){const V=G.get(x);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,V=0){J=x,q=I,k=V;let z=null,B=!1,ae=!1;if(x){const he=G.get(x);if(he.__useDefaultFramebuffer!==void 0){f.bindFramebuffer(U.FRAMEBUFFER,he.__webglFramebuffer),ue.copy(x.viewport),Me.copy(x.scissor),Be=x.scissorTest,f.viewport(ue),f.scissor(Me),f.setScissorTest(Be),ee=-1;return}else if(he.__webglFramebuffer===void 0)W.setupRenderTarget(x);else if(he.__hasExternalTextures)W.rebindTextures(x,G.get(x.texture).__webglTexture,G.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ae=x.depthTexture;if(he.__boundDepthTexture!==Ae){if(Ae!==null&&G.has(Ae)&&(x.width!==Ae.image.width||x.height!==Ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(x)}}const ge=x.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(ae=!0);const _e=G.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(_e[I])?z=_e[I][V]:z=_e[I],B=!0):x.samples>0&&W.useMultisampledRTT(x)===!1?z=G.get(x).__webglMultisampledFramebuffer:Array.isArray(_e)?z=_e[V]:z=_e,ue.copy(x.viewport),Me.copy(x.scissor),Be=x.scissorTest}else ue.copy(pe).multiplyScalar(K).floor(),Me.copy(Ve).multiplyScalar(K).floor(),Be=We;if(V!==0&&(z=j),f.bindFramebuffer(U.FRAMEBUFFER,z)&&f.drawBuffers(x,z),f.viewport(ue),f.scissor(Me),f.setScissorTest(Be),B){const he=G.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,he.__webglTexture,V)}else if(ae){const he=I;for(let ge=0;ge<x.textures.length;ge++){const _e=G.get(x.textures[ge]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ge,_e.__webglTexture,V,he)}}else if(x!==null&&V!==0){const he=G.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,he.__webglTexture,V)}ee=-1},this.readRenderTargetPixels=function(x,I,V,z,B,ae,he,ge=0){if(!(x&&x.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){f.bindFramebuffer(U.FRAMEBUFFER,_e);try{const Ae=x.textures[ge],De=Ae.format,Oe=Ae.type;if(x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ge),!y.textureFormatReadable(De)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!y.textureTypeReadable(Oe)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-z&&V>=0&&V<=x.height-B&&U.readPixels(I,V,z,B,de.convert(De),de.convert(Oe),ae)}finally{const Ae=J!==null?G.get(J).__webglFramebuffer:null;f.bindFramebuffer(U.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(x,I,V,z,B,ae,he,ge=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=G.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e)if(I>=0&&I<=x.width-z&&V>=0&&V<=x.height-B){f.bindFramebuffer(U.FRAMEBUFFER,_e);const Ae=x.textures[ge],De=Ae.format,Oe=Ae.type;if(x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ge),!y.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!y.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Te),U.bufferData(U.PIXEL_PACK_BUFFER,ae.byteLength,U.STREAM_READ),U.readPixels(I,V,z,B,de.convert(De),de.convert(Oe),0);const Je=J!==null?G.get(J).__webglFramebuffer:null;f.bindFramebuffer(U.FRAMEBUFFER,Je);const at=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await oc(U,at,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Te),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ae),U.deleteBuffer(Te),U.deleteSync(at),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,V=0){const z=Math.pow(2,-V),B=Math.floor(x.image.width*z),ae=Math.floor(x.image.height*z),he=I!==null?I.x:0,ge=I!==null?I.y:0;W.setTexture2D(x,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,he,ge,B,ae),f.unbindTexture()},this.copyTextureToTexture=function(x,I,V=null,z=null,B=0,ae=0){let he,ge,_e,Ae,De,Oe,Te,Je,at;const et=x.isCompressedTexture?x.mipmaps[ae]:x.image;if(V!==null)he=V.max.x-V.min.x,ge=V.max.y-V.min.y,_e=V.isBox3?V.max.z-V.min.z:1,Ae=V.min.x,De=V.min.y,Oe=V.isBox3?V.min.z:0;else{const nt=Math.pow(2,-B);he=Math.floor(et.width*nt),ge=Math.floor(et.height*nt),x.isDataArrayTexture?_e=et.depth:x.isData3DTexture?_e=Math.floor(et.depth*nt):_e=1,Ae=0,De=0,Oe=0}z!==null?(Te=z.x,Je=z.y,at=z.z):(Te=0,Je=0,at=0);const Ke=de.convert(I.format),rt=de.convert(I.type);let xe;I.isData3DTexture?(W.setTexture3D(I,0),xe=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(W.setTexture2DArray(I,0),xe=U.TEXTURE_2D_ARRAY):(W.setTexture2D(I,0),xe=U.TEXTURE_2D),f.activeTexture(U.TEXTURE0),f.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),f.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),f.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);const Lt=f.getParameter(U.UNPACK_ROW_LENGTH),Ri=f.getParameter(U.UNPACK_IMAGE_HEIGHT),It=f.getParameter(U.UNPACK_SKIP_PIXELS),qt=f.getParameter(U.UNPACK_SKIP_ROWS),mi=f.getParameter(U.UNPACK_SKIP_IMAGES);f.pixelStorei(U.UNPACK_ROW_LENGTH,et.width),f.pixelStorei(U.UNPACK_IMAGE_HEIGHT,et.height),f.pixelStorei(U.UNPACK_SKIP_PIXELS,Ae),f.pixelStorei(U.UNPACK_SKIP_ROWS,De),f.pixelStorei(U.UNPACK_SKIP_IMAGES,Oe);const ki=x.isDataArrayTexture||x.isData3DTexture,Ye=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){const nt=G.get(x),gi=G.get(I),qe=G.get(nt.__renderTarget),_r=G.get(gi.__renderTarget);f.bindFramebuffer(U.READ_FRAMEBUFFER,qe.__webglFramebuffer),f.bindFramebuffer(U.DRAW_FRAMEBUFFER,_r.__webglFramebuffer);for(let Wi=0;Wi<_e;Wi++)ki&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(x).__webglTexture,B,Oe+Wi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(I).__webglTexture,ae,at+Wi)),U.blitFramebuffer(Ae,De,he,ge,Te,Je,he,ge,U.DEPTH_BUFFER_BIT,U.NEAREST);f.bindFramebuffer(U.READ_FRAMEBUFFER,null),f.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(B!==0||x.isRenderTargetTexture||G.has(x)){const nt=G.get(x),gi=G.get(I);f.bindFramebuffer(U.READ_FRAMEBUFFER,X),f.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let qe=0;qe<_e;qe++)ki?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,nt.__webglTexture,B,Oe+qe):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,nt.__webglTexture,B),Ye?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,gi.__webglTexture,ae,at+qe):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,gi.__webglTexture,ae),B!==0?U.blitFramebuffer(Ae,De,he,ge,Te,Je,he,ge,U.COLOR_BUFFER_BIT,U.NEAREST):Ye?U.copyTexSubImage3D(xe,ae,Te,Je,at+qe,Ae,De,he,ge):U.copyTexSubImage2D(xe,ae,Te,Je,Ae,De,he,ge);f.bindFramebuffer(U.READ_FRAMEBUFFER,null),f.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ye?x.isDataTexture||x.isData3DTexture?U.texSubImage3D(xe,ae,Te,Je,at,he,ge,_e,Ke,rt,et.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(xe,ae,Te,Je,at,he,ge,_e,Ke,et.data):U.texSubImage3D(xe,ae,Te,Je,at,he,ge,_e,Ke,rt,et):x.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ae,Te,Je,he,ge,Ke,rt,et.data):x.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ae,Te,Je,et.width,et.height,Ke,et.data):U.texSubImage2D(U.TEXTURE_2D,ae,Te,Je,he,ge,Ke,rt,et);f.pixelStorei(U.UNPACK_ROW_LENGTH,Lt),f.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ri),f.pixelStorei(U.UNPACK_SKIP_PIXELS,It),f.pixelStorei(U.UNPACK_SKIP_ROWS,qt),f.pixelStorei(U.UNPACK_SKIP_IMAGES,mi),ae===0&&I.generateMipmaps&&U.generateMipmap(xe),f.unbindTexture()},this.initRenderTarget=function(x){G.get(x).__webglFramebuffer===void 0&&W.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?W.setTextureCube(x,0):x.isData3DTexture?W.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?W.setTexture2DArray(x,0):W.setTexture2D(x,0),f.unbindTexture()},this.resetState=function(){q=0,k=0,J=null,f.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}}function qf(){const r=wa.useRef(null),[e,t]=wa.useState(!1);return wa.useEffect(()=>{if(!r.current)return;const i=r.current.clientWidth,a=Math.max(300,Math.min(i*.6,500)),n=new Ec,s=new Bt(50,i/a,.1,1e3);s.position.set(0,2,6),s.lookAt(0,0,0);const o=new jf({antialias:!0,alpha:!0});o.setSize(i,a),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.current.appendChild(o.domElement);const c=new qc(3355460,.6);n.add(c);const l=new ao(16777215,1.2);l.position.set(5,3,5),n.add(l);const d=new ao(4491519,.3);d.position.set(-3,-1,-3),n.add(d);const g=800,u=new wt,p=new Float32Array(g*3);for(let K=0;K<g*3;K++)p[K]=(Math.random()-.5)*100;u.setAttribute("position",new Wt(p,3));const v=new nl({color:16777215,size:.08,sizeAttenuation:!0});n.add(new Nc(u,v));const S=new sr,m=new or(1.5,64,64),h=new ir({color:2250154,emissive:1122884,emissiveIntensity:.15,shininess:25}),A=new gt(m,h);S.add(A);const C=new ir({color:3385941,emissive:1127185,emissiveIntensity:.1,transparent:!0,opacity:.7});[[.3,.6,1.35],[-.5,.3,1.38],[.1,-.4,1.42],[-.8,-.6,1.2],[.7,-.7,1.15],[-.2,.9,1.3]].forEach(([K,Se,Ce])=>{const pe=new or(.25+Math.random()*.3,12,12),Ve=new gt(pe,C);Ve.position.set(K,Se,Ce),S.add(Ve)});const M=new or(1.58,64,64),b=new ir({color:6724095,transparent:!0,opacity:.12,side:bt});S.add(new gt(M,b)),n.add(S);const T=3,w=new Fc(0,0,T,T,0,2*Math.PI,!1,0).getPoints(128),_=new wt().setFromPoints(w.map(K=>new F(K.x,0,K.y))),E=new al({color:4491519,transparent:!0,opacity:.2}),L=new Dc(_,E);L.rotation.x=Math.PI*.15,n.add(L);const R=new sr,N=new Hi(.12,.12,.18),j=new ir({color:13421772,shininess:80}),X=new gt(N,j);R.add(X);const H=new Hi(.35,.01,.1),q=new ir({color:2241450,emissive:1122918,emissiveIntensity:.2}),k=new gt(H,q);k.position.x=-.22,R.add(k);const J=new gt(H,q);J.position.x=.22,R.add(J);const ee=new ms(.005,.005,.15),re=new ir({color:8947848}),ue=new gt(ee,re);ue.position.y=.12,R.add(ue);const Me=new or(.04,8,8,0,Math.PI*2,0,Math.PI/2),Be=new gt(Me,re);Be.position.y=.2,Be.rotation.x=Math.PI,R.add(Be),n.add(R);let $e,Ge=performance.now();function Y(){$e=requestAnimationFrame(Y);const K=(performance.now()-Ge)/1e3;Ge=performance.now(),S.rotation.y+=K*.08;const Se=K*.5;R.position.x=Math.cos(Se)*T,R.position.z=Math.sin(Se)*T,R.position.y=Math.sin(Se*2)*.15,R.lookAt(0,0,0),o.render(n,s)}Y(),t(!0);const ie=()=>{if(!r.current)return;const K=r.current.clientWidth,Se=Math.max(300,Math.min(K*.6,500));s.aspect=K/Se,s.updateProjectionMatrix(),o.setSize(K,Se)};return window.addEventListener("resize",ie),()=>{cancelAnimationFrame($e),window.removeEventListener("resize",ie),r.current&&o.domElement.parentNode===r.current&&r.current.removeChild(o.domElement),o.dispose(),m.dispose(),h.dispose(),M.dispose(),b.dispose(),u.dispose(),v.dispose(),N.dispose(),j.dispose(),H.dispose(),q.dispose(),ee.dispose(),re.dispose(),Me.dispose()}},[]),Jt.jsx("div",{className:"satellite-orbit",ref:r,children:!e&&Jt.jsx("div",{className:"orbit-loading",children:"Loading visualization..."})})}function Qf(){return Jt.jsxs(Al,{className:"experience-post",children:[Jt.jsxs("div",{className:"fade-in",children:[Jt.jsx("h2",{children:"Modeling & Simulation Developer"}),Jt.jsxs("p",{className:"exp-meta",children:["The Aerospace Corporation — Modeling & Simulation Department",Jt.jsx("br",{}),"2015 - 2019"]})]}),Jt.jsx(qf,{}),Jt.jsx("div",{className:"fade-in",children:Jt.jsx("div",{className:"exp-body"})})]})}export{Qf as default};

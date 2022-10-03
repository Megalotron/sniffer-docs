"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(m,o(o({ref:t},f),{},{components:n})):r.createElement(m,o({ref:t},f))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="CLI",l={unversionedId:"sniffer/cli",id:"sniffer/cli",title:"CLI",description:"The sniffer can be used with CLI arguments, you can display the help menu with --help or -h arguments",source:"@site/docs/sniffer/cli.md",sourceDirName:"sniffer",slug:"/sniffer/cli",permalink:"/sniffer-docs/docs/sniffer/cli",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sniffer/cli.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Sniffer",permalink:"/sniffer-docs/docs/sniffer/"}},s={},p=[{value:"Sniffing from a Network device",id:"sniffing-from-a-network-device",level:3},{value:"Sniffing from a Pcap file",id:"sniffing-from-a-pcap-file",level:3},{value:"Write captured packets to a Pcap file",id:"write-captured-packets-to-a-pcap-file",level:3},{value:"Send data on a gRPC server",id:"send-data-on-a-grpc-server",level:3},{value:"Set the verbosity level",id:"set-the-verbosity-level",level:3},{value:"Save logs to a file",id:"save-logs-to-a-file",level:3}],f={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cli"},"CLI"),(0,a.kt)("p",null,"The sniffer can be used with CLI arguments, you can display the help menu with ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"-h")," arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sniffer 0.1.0\nThe sniffer of Megalotron\n\nUSAGE:\n    sniffer [OPTIONS]\n\nOPTIONS:\n    -h, --help                     Print help information\n    -i, --interface <INTERFACE>    Use a specific network interface instead of the default one\n    -l, --logfile <LOGFILE>        If set, the logs will be save on the provided file\n    -r, --read <READ>              Read packets from a pcap file instead of a network interface\n    -u, --url <URL>                URL of the grpc server to send the pcap data stream\n    -v, --verbosity <VERBOSITY>    Set the verbosity level [default: info]\n    -V, --version                  Print version information\n    -w, --write <WRITE>            Write captured packets on a pcap file\n")),(0,a.kt)("h3",{id:"sniffing-from-a-network-device"},"Sniffing from a Network device"),(0,a.kt)("p",null,"To collect network traffic from a specific network interface, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-i")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--interface")," argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sniffer -d eth0\n")),(0,a.kt)("h3",{id:"sniffing-from-a-pcap-file"},"Sniffing from a Pcap file"),(0,a.kt)("p",null,"To collect network traffic from a pcap file, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-r")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--read")," argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sniffer -r dataset.pcap\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Only one of the previous arguments can be used at the same time")),(0,a.kt)("h3",{id:"write-captured-packets-to-a-pcap-file"},"Write captured packets to a Pcap file"),(0,a.kt)("p",null,"The sniffer can write the captured packets to a pcap file, to do so, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-w")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--write")," argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sniffer -w output.pcap\n")),(0,a.kt)("h3",{id:"send-data-on-a-grpc-server"},"Send data on a gRPC server"),(0,a.kt)("p",null,"The sniffer sends the packets to a gRPC server, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-u")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--url")," arguments to specify the address of the server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sniffer -u http://0.0.0.0:50051\n")),(0,a.kt)("h3",{id:"set-the-verbosity-level"},"Set the verbosity level"),(0,a.kt)("p",null,"The sniffer can set the verbosity level with the ",(0,a.kt)("inlineCode",{parentName:"p"},"-v")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--verbosity")," arguments, the possible values are: ","[debug, info, warn, error]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sniffer -v debug\n")),(0,a.kt)("h3",{id:"save-logs-to-a-file"},"Save logs to a file"),(0,a.kt)("p",null,"The sniffer can save the logs in a file, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-l")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--logfile")," arguments to specify the path of the file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sniffer -l sniffer.log\n")))}c.isMDXComponent=!0}}]);
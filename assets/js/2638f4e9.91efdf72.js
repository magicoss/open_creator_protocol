"use strict";(self.webpackChunkocp_docs=self.webpackChunkocp_docs||[]).push([[381],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>_});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,_=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(_,c(c({ref:t},s),{},{components:r})):n.createElement(_,c({ref:t},s))}));function _(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3974:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));r(8209);const a={title:"CLI",description:"Describes the cli usage of the Open Creator Protocol."},c="CLI Usage",i={unversionedId:"open-creator-protocol/cli",id:"open-creator-protocol/cli",title:"CLI",description:"Describes the cli usage of the Open Creator Protocol.",source:"@site/docs/01-open-creator-protocol/04-cli.md",sourceDirName:"01-open-creator-protocol",slug:"/open-creator-protocol/cli",permalink:"/open_creator_protocol/open-creator-protocol/cli",draft:!1,editUrl:"https://github.com/magiceden-oss/open_creator_protocol/tree/main/docs/docs/01-open-creator-protocol/04-cli.md",tags:[],version:"current",lastUpdatedAt:1672966970,formattedLastUpdatedAt:"Jan 6, 2023",sidebarPosition:4,frontMatter:{title:"CLI",description:"Describes the cli usage of the Open Creator Protocol."},sidebar:"sidebar",previous:{title:"On-chain Accounts",permalink:"/open_creator_protocol/open-creator-protocol/on-chain-accounts"}},l={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cli-usage"},"CLI Usage"),(0,o.kt)("p",null,"The CLI can be executed by running the following from the project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/magiceden-oss/open_creator_protocol.git\ncd open_creator_protocol\nts-node sdk/src/cli.ts\n")),(0,o.kt)("p",null,"Create a policy without a dynamic royalty setting:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'CLI_COMMAND=create_policy \\\nCLI_AUTHORITY=./keypair.json \\\nCLI_RPC=https://api.devnet.solana.com \\\nCLI_JSON_RULE=\'{"conditions":{"field":"action","operator":"string_not_equals","value":""},"events":[]}\' \\\n  ts-node sdk/src/cli.ts\n')),(0,o.kt)("p",null,"Create a policy with a dynamic royalty setting:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'CLI_COMMAND=create_policy \\\nCLI_AUTHORITY=./keypair.json \\\nCLI_RPC=https://api.devnet.solana.com \\\nCLI_JSON_RULE=\'{"conditions":{"field":"action","operator":"string_not_equals","value":""},"events":[]}\' \\\nCLI_DYNAMIC_ROYALTY_PRICE_LINEAR=\'{"startPrice":0,"endPrice":5000000000,"startMultiplierBp":10000,"endMultiplierBp":0}\' \\\n  ts-node sdk/src/cli.ts\n')),(0,o.kt)("p",null,"Update a policy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'CLI_POLICY_PUBKEY=TODO \\\nCLI_COMMAND=update_policy \\\nCLI_AUTHORITY=./keypair.json \\\nCLI_RPC=https://api.devnet.solana.com \\\nCLI_JSON_RULE=\'{"conditions":{"field":"action","operator":"string_not_equals","value":""},"events":[]}\' \\\nCLI_DYNAMIC_ROYALTY_PRICE_LINEAR=\'{"startPrice":0,"endPrice":5000000000,"startMultiplierBp":10000,"endMultiplierBp":0}\' \\\n  ts-node sdk/src/cli.ts\n')),(0,o.kt)("p",null,"Migrate OCP to MPL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"CLI_COMMAND=migrate_to_mpl \\\nCLI_POLICY_PUBKEY=TODO \\\nCLI_MINT=TODO \\\nCLI_UPDATE_AUTHORITY=./metadata_update_authority_keypair.json \\\nCLI_RPC=https://api.devnet.solana.com \\\n  ts-node sdk/src/cli.ts\n")))}u.isMDXComponent=!0},8209:(e,t,r)=>{r(7294)}}]);
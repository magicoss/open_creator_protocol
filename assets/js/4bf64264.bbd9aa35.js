"use strict";(self.webpackChunkocp_docs=self.webpackChunkocp_docs||[]).push([[647],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=m(a),N=r,u=c["".concat(i,".").concat(N)]||c[N]||d[N]||s;return a?n.createElement(u,p(p({ref:t},l),{},{components:a})):n.createElement(u,p({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,p=new Array(s);p[0]=N;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,p[1]=o;for(var m=2;m<s;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},5957:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));a(8209);const s={title:"Concepts",description:"Describes the concepts of Open Creator Protocol."},p="Concepts",o={unversionedId:"open-creator-protocol/concepts",id:"open-creator-protocol/concepts",title:"Concepts",description:"Describes the concepts of Open Creator Protocol.",source:"@site/docs/01-open-creator-protocol/02-concepts.md",sourceDirName:"01-open-creator-protocol",slug:"/open-creator-protocol/concepts",permalink:"/open_creator_protocol/open-creator-protocol/concepts",draft:!1,editUrl:"https://github.com/magiceden-oss/open_creator_protocol/tree/main/docs/docs/01-open-creator-protocol/02-concepts.md",tags:[],version:"current",lastUpdatedAt:1704244664,formattedLastUpdatedAt:"Jan 3, 2024",sidebarPosition:2,frontMatter:{title:"Concepts",description:"Describes the concepts of Open Creator Protocol."},sidebar:"sidebar",previous:{title:"Tutorials",permalink:"/open_creator_protocol/open-creator-protocol/tutorials"},next:{title:"On-chain Accounts",permalink:"/open_creator_protocol/open-creator-protocol/on-chain-accounts"}},i={},m=[{value:"Action Context",id:"action-context",level:2},{value:"Onchain Policy Engine",id:"onchain-policy-engine",level:2},{value:"Mint State",id:"mint-state",level:2},{value:"Dynamic Royalties",id:"dynamic-royalties",level:2}],l={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"concepts"},"Concepts"),(0,r.kt)("p",null,"OCP uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-program-library/tree/master/managed-token"},"SPL managed-token")," as the\nbase for holding the freeze authority of the spl-token. And managed-token has 1:1\nfeature parity of the spl-token in terms of the token interfaces like ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"approve"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"revoke"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"burn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"close"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"init_account")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"mint_to"),"."),(0,r.kt)("img",{src:"../img/high_level.png",alt:"high level design",style:{borderRadius:"0px"},width:"700"}),(0,r.kt)("h2",{id:"action-context"},"Action Context"),(0,r.kt)("p",null,"Action context is the context used to build the json rules engine. OCP's solution is a JSON rules engine DSL to define\nwhat can be applied to the context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct ActionCtx {\n    pub action: String,\n    pub program_ids: Vec<String>,\n    pub mint: String,\n    pub mint_state: MintStateCtx,\n    pub mint_account: Option<MintAccountCtx>,\n    pub metadata: Option<MetadataCtx>,\n    pub payer: Option<String>,\n    pub from: Option<String>, // owner of the from_account, and many action's initiator\n    pub to: Option<String>,   // owner of the to_account\n    pub last_memo_signer: Option<String>,\n    pub last_memo_data: Option<String>,\n}\n")),(0,r.kt)("img",{src:"../img/policy_account.png",alt:"policy engine",style:{borderRadius:"0px"},width:"700"}),(0,r.kt)("h2",{id:"onchain-policy-engine"},"Onchain Policy Engine"),(0,r.kt)("p",null,"OCP utilises the JSON Rules Engine package, for more information ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/GopherJ/json-rules-engine-rs"},"please see the repository"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sample Use Cases"),(0,r.kt)("th",{parentName:"tr",align:null},"Policy (json_rule)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allow For All"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Program IDs Allowlist"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "field": "program_ids", "operator": "string_is_subset", "value": ["1111111111111111111111111111111"]}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Program IDs Denylist"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "field": "program_ids", "operator": "string_does_not_contain_any", "value": ["1111111111111111111111111111111"]}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Soulbound Token"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "field": "mint_state/transferred_count", "operator": "int_less_than", "value": 1 }'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Semi Soulbound Token"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "field": "mint_state/transferred_count", "operator": "int_less_than", "value": n }'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transfer Timestamp Constraint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "field": "mint_state/derived_datetime/utc_timestamp", "operator": "int_greater_than", "value": 1669881409}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transfer Cooldown Token"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "field": "mint_state/derived_cooldown", "operator": "int_greater_than", "value": 3600 }'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Metadata Name Filter"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "field": "metadata/name", "operator": "string_has_substring", "value": "FROZEN"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Metadata URI Filter"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "field": "metadata/uri", "operator": "string_has_substring", "value": "IPFS"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Single Transfer Destination"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "field": "to", "operator": "string_equals", "value": ["1111111111111111111111111111111"]}'))))),(0,r.kt)("admonition",{title:"A Complex Transfer Logic Example",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Here's a full example of how a creator can leverage OCP to personalize the transferability. The logic works like this:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"When the ",(0,r.kt)("inlineCode",{parentName:"li"},"action")," is not ",(0,r.kt)("inlineCode",{parentName:"li"},"transfer"),", pass"),(0,r.kt)("li",{parentName:"ul"},"When the ",(0,r.kt)("inlineCode",{parentName:"li"},"action")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"transfer"),", then one cannot transfer if the ",(0,r.kt)("inlineCode",{parentName:"li"},"metadata/name")," contains a keyword ",(0,r.kt)("inlineCode",{parentName:"li"},"FROZEN")),(0,r.kt)("li",{parentName:"ul"},"When the ",(0,r.kt)("inlineCode",{parentName:"li"},"action")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"transfer"),", then one cannot transfer to a specific address if the ",(0,r.kt)("inlineCode",{parentName:"li"},"metadata/name")," doesn't contain ",(0,r.kt)("inlineCode",{parentName:"li"},"WINNER"),".")),(0,r.kt)("p",{parentName:"admonition"},'Example of the "Magic Mint"\'s complex policy can be found on the ',(0,r.kt)("a",{parentName:"p",href:"https://explorer.solana.com/address/6hWFsAwxZLs4j2DCiV8QEYeufMCqv8zDK7PkNkjW5RVq/anchor-account"},"solana explorer link"),"."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "events": [],\n  "conditions": {\n    "or": [\n      {\n        "field": "action",\n        "operator": "string_not_equals",\n        "value": "transfer"\n      },\n      {\n        "and": [\n          {\n            "not": {\n              "field": "metadata/name",\n              "operator": "string_has_substring",\n              "value": "FROZEN"\n            }\n          },\n          {\n            "or": [\n              {\n                "field": "to",\n                "operator": "string_not_equals",\n                "value": "DWuopEsTrg5qWMSMVT1hoiVTRQG9PkGJZSbXiKAxHYbn"\n              },\n              {\n                "field": "metadata/name",\n                "operator": "string_has_substring",\n                "value": "WINNER"\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n}\n'))),(0,r.kt)("h2",{id:"mint-state"},"Mint State"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MintState")," determines if a mint (token) is with OCP or not. Mint state is a key PDA that OCP uses to associate a mint account with a policy and some state information related to the mint account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct MintState {\n    pub version: u8,\n    pub bump: [u8; 1],\n    pub mint: Pubkey,\n    pub policy: Pubkey,\n    pub locked_by: Option<Pubkey>,\n    pub last_approved_at: i64,\n    pub last_transferred_at: i64,\n    pub transferred_count: u32,\n}\n")),(0,r.kt)("p",null,"One can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"findMintStatePk")," to test if a mint account has a ",(0,r.kt)("inlineCode",{parentName:"p"},"MintState")," account, and then leverage what OCP program provides."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'export const findMintStatePk = (mint: PublicKey) => {\n  return PublicKey.findProgramAddressSync(\n    [utils.bytes.utf8.encode("mint_state"), mint.toBuffer()],\n    PROGRAM_ID\n  )[0];\n};\n\nconst mintStatePk = findMintStatePk(mint);\nconst mintStateAcc = await conn.getAccountInfo(mintStatePk): // returns null | AccountInfo<Buffer>, and then you can decide if it\'s OCP going forward.\n')),(0,r.kt)("h2",{id:"dynamic-royalties"},"Dynamic Royalties"),(0,r.kt)("p",null,"Creators can specify a relationship between an NFT\u2019s sale price and royalty amount via a linear price curve. And more\ncurve types to be supported in the future. The first dynamic royalty curve OCP supports is ",(0,r.kt)("inlineCode",{parentName:"p"},"DynamicRoyaltyPriceLinear"),".\nBoth ",(0,r.kt)("inlineCode",{parentName:"p"},"start_multiplier_bp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"end_multiplier_bp")," are relative multipliers based on the\nMetaplex's ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.seller_fee_basis_points"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct DynamicRoyaltyPriceLinear {\n    pub price_mint: Option<Pubkey>,\n    pub start_price: u64,\n    pub end_price: u64,\n    pub start_multiplier_bp: u16,\n    pub end_multiplier_bp: u16,\n}\n")),(0,r.kt)("p",null,"Specifically, if we note that r is the final multiplier_bp, then:"),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"y"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"y"),(0,r.kt)("mn",{parentName:"mrow"},"2"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mi",{parentName:"mrow"},"y"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow"},"\u2217"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mn",{parentName:"mrow"},"2"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"r = y1 + (y2 - y1) * (price - x1) / (x2 - x1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"ce"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mord"},"/"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("p",null,"For example, given the following dynamic royalty setting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"DynamicRoyaltyPriceLinear:\n{\n  start_price: 0 SOL\n  end_price: 5 SOL\n  start_multiplier_bp: 100% (10000 bp)\n  end_multiplier_bp: 50% (5000 bp)\n}\n\nMetadata:\nseller_fee_basis_points: 5% (500 bp)\n\nprice: 0 SOL   ===> royalty_bp: 500 (5%)\nprice: 2.5 SOL ===> royalty_bp: 375 (3.75%)\nprice: 5 SOL   ===> royalty_bp: 250 (2.5%)\n")))}c.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);
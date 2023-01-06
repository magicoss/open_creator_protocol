"use strict";(self.webpackChunkocp_docs=self.webpackChunkocp_docs||[]).push([[974],{3905:(t,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>k});var n=o(7294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function c(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var l=n.createContext({}),s=function(t){var e=n.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):c(c({},e),t)),o},p=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=s(o),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return o?n.createElement(k,c(c({ref:e},p),{},{components:o})):n.createElement(k,c({ref:e},p))}));function k(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=o.length,c=new Array(r);c[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[u]="string"==typeof t?t:a,c[1]=i;for(var s=2;s<r;s++)c[s]=o[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},842:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=o(7462),a=(o(7294),o(3905));o(8209);const r={title:"Tutorials",description:"Describes how developer can get started with the Open Creator Protocol."},c=void 0,i={unversionedId:"open-creator-protocol/tutorials",id:"open-creator-protocol/tutorials",title:"Tutorials",description:"Describes how developer can get started with the Open Creator Protocol.",source:"@site/docs/01-open-creator-protocol/01-tutorials.md",sourceDirName:"01-open-creator-protocol",slug:"/open-creator-protocol/tutorials",permalink:"/open_creator_protocol/open-creator-protocol/tutorials",draft:!1,editUrl:"https://github.com/magiceden-oss/open_creator_protocol/tree/main/docs/docs/01-open-creator-protocol/01-tutorials.md",tags:[],version:"current",lastUpdatedAt:1672966970,formattedLastUpdatedAt:"Jan 6, 2023",sidebarPosition:1,frontMatter:{title:"Tutorials",description:"Describes how developer can get started with the Open Creator Protocol."},sidebar:"sidebar",previous:{title:"Overview",permalink:"/open_creator_protocol/open-creator-protocol/overview"},next:{title:"Concepts",permalink:"/open_creator_protocol/open-creator-protocol/concepts"}},l={},s=[{value:"How to interact with OCP NFT",id:"how-to-interact-with-ocp-nft",level:2},{value:"How to mint OCP NFT",id:"how-to-mint-ocp-nft",level:2},{value:"How to lock/unlock OCP NFT for trading/staking/loan",id:"how-to-lockunlock-ocp-nft-for-tradingstakingloan",level:2},{value:"How to create a policy",id:"how-to-create-a-policy",level:2},{value:"How to update a policy",id:"how-to-update-a-policy",level:2},{value:"How to migrate OCP token back to other standards (e.g. Metaplex Master Edition)",id:"how-to-migrate-ocp-token-back-to-other-standards-eg-metaplex-master-edition",level:2},{value:"How to run OCP locally (for development)",id:"how-to-run-ocp-locally-for-development",level:2}],p={toc:s};function u(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-interact-with-ocp-nft"},"How to interact with OCP NFT"),(0,a.kt)("p",null,"For javascript sdk examples, please take a look at the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/magiceden-oss/open_creator_protocol/blob/main/tests/token.spec.ts"},"tests/token.spec.ts"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { createTransferInstruction, process_tx } from "@magiceden-oss/open_creator_protocol";\n\nconst transferIx = createTransferInstruction({\n  policy: DEVNET_POLICY_ALL,\n  freezeAuthority: findFreezeAuthorityPk(DEVNET_POLICY_ALL),\n  mint: tokenMint,\n  metadata: findMetadataPda(tokenMint),\n  mintState: findMintStatePk(tokenMint),\n  from: alice.publicKey,\n  fromAccount: aliceAta,\n  cmtProgram: CMT_PROGRAM,\n  instructions: SYSVAR_INSTRUCTIONS_PUBKEY,\n  to: bob.publicKey,\n  toAccount: bobAta,\n});\n\nawait process_tx(conn, [computeBudgetIx, initAccIx, transferIx], [alice]);\n')),(0,a.kt)("p",null,"For solana programs using cpi, here's an example of doing the transfer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nopen_creator_protocol = { version = "0.3.0", features = ["cpi"] }\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"open_creator_protocol::cpi::transfer(CpiContext::new(\n    ctx.accounts.ocp_program.to_account_info(),\n    open_creator_protocol::cpi::accounts::TransferCtx {\n        policy: ctx.accounts.ocp_policy.to_account_info(),\n        mint: ctx.accounts.token_mint.to_account_info(),\n        metadata: ctx.accounts.metadata.to_account_info(),\n        mint_state: ctx.accounts.ocp_mint_state.to_account_info(),\n        from: ctx.accounts.program_as_signer.to_account_info(),\n        from_account: ctx.accounts.seller_token_ata.to_account_info(),\n        cmt_program: ctx.accounts.cmt_program.to_account_info(),\n        instructions: ctx.accounts.instructions.to_account_info(),\n        freeze_authority: ctx.accounts.ocp_freeze_authority.to_account_info(),\n        token_program: ctx.accounts.token_program.to_account_info(),\n        to: ctx.accounts.buyer.to_account_info(),\n        to_account: ctx.accounts.buyer_token_ata.to_account_info(),\n    },\n))?;\n")),(0,a.kt)("h2",{id:"how-to-mint-ocp-nft"},"How to mint OCP NFT"),(0,a.kt)("p",null,"To mint an OCP NFT please follow these instructions."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create or use an existing policy account"),(0,a.kt)("li",{parentName:"ol"},"Create mint account"),(0,a.kt)("li",{parentName:"ol"},"Create metadata account"),(0,a.kt)("li",{parentName:"ol"},"Call ",(0,a.kt)("inlineCode",{parentName:"li"},"wrap")," in OCP to wrap the mint account with the policy"),(0,a.kt)("li",{parentName:"ol"},"Call ",(0,a.kt)("inlineCode",{parentName:"li"},"init_account")," in OCP to create the token account ata"),(0,a.kt)("li",{parentName:"ol"},"Call ",(0,a.kt)("inlineCode",{parentName:"li"},"mint_to")," in OCP to actually mint into the token account using the mint account.")),(0,a.kt)("p",null,"For more details, please take a look at the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/magiceden-oss/open_creator_protocol/blob/8064939f234c5453b3a6bed108aec729803232ad/tests/utils.ts#L62"},"util.ts example"),"."),(0,a.kt)("h2",{id:"how-to-lockunlock-ocp-nft-for-tradingstakingloan"},"How to lock/unlock OCP NFT for trading/staking/loan"),(0,a.kt)("p",null,'OCP NFT provides a convinent way of "lock/unlock" as a higher order of freezing.\nFor example, if we want to implement escrowless listing in a marketplace. This is also true for any staking or loan platform wants\nto have escrowless lock-in of user tokens.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// List\n1. Call `approve` in OCP to setup the delegate just like normal tokens\n2. Call `lock` in OCP to lock the token. It prevents the OCP token from accepting any other actions\n\n// Delist\n1. Call `unlock` in OCP to unlock the token\n2. Call `revoke` in OCP to revoke the previously approved delegate\n")),(0,a.kt)("h2",{id:"how-to-create-a-policy"},"How to create a policy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const jsonRule = JSON.stringify({\n  events: [],\n  conditions: {\n    and: [{ field: "action", operator: "string_not_equals", value: "" }],\n  },\n});\nconst ix = createInitPolicyInstruction(\n  {\n    policy: findPolicyPk(uuid),\n    authority: alice.publicKey,\n    uuid,\n  },\n  { arg: { jsonRule, dynamicRoyalty: null } }\n);\nawait process_tx(conn, [ix], [alice]);\n')),(0,a.kt)("h2",{id:"how-to-update-a-policy"},"How to update a policy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const jsonRule = JSON.stringify({\n  events: [],\n  conditions: {\n    and: [{ field: "action", operator: "string_not_equals", value: "" }],\n  },\n});\nix = createUpdatePolicyInstruction(\n  { policy: findPolicyPk(uuid), authority: alice.publicKey },\n  { arg: { authority: bob.publicKey, jsonRule, dynamicRoyalty: null } }\n);\nawait process_tx(conn, [ix], [alice]);\n')),(0,a.kt)("h2",{id:"how-to-migrate-ocp-token-back-to-other-standards-eg-metaplex-master-edition"},"How to migrate OCP token back to other standards (e.g. Metaplex Master Edition)"),(0,a.kt)("p",null,"Notice that OCP NFTs are based on ",(0,a.kt)("inlineCode",{parentName:"p"},"spl-managed-token"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"spl-token"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"token metadata")," programs."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Token Mint (supply = 1, decimals = 0)"),(0,a.kt)("li",{parentName:"ul"},"Token Account"),(0,a.kt)("li",{parentName:"ul"},"Token Metadata")),(0,a.kt)("p",null,'By definition, it\'s the same implementation of all the NFTs on solana. Everything is the same including\ninteracting with wallets (except "transfer", that users can use ME profile page to send tokens including OCP NFTs),\nrun token gated content, and prove token ownerships exactly like the normal Normal NFTs.'),(0,a.kt)("p",null,"OCP provides an upstream authority to interact with ",(0,a.kt)("inlineCode",{parentName:"p"},"spl-managed-token")," that wraps the token interfaces."),(0,a.kt)("p",null,"And if creators want to migrate from OCP to other standards, the seamless way of doing that is to call\none of the migration entrypoints in OCP."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const ix = createMigrateToMplInstruction({\n  policy: CLI_POLICY_PUBKEY,\n  freezeAuthority: findFreezeAuthorityPk(CLI_POLICY_PUBKEY),\n  mint: CLI_MINT,\n  metadata: findMetadataPda(CLI_MINT),\n  mintState: findMintStatePk(CLI_MINT),\n  from: CLI_UPDATE_AUTHORITY,\n  fromAccount: tokenAccount,\n  cmtProgram: CMT_PROGRAM,\n  instructions: SYSVAR_INSTRUCTIONS_PUBKEY,\n  edition: findMasterEditionV2Pda(CLI_MINT),\n  metadataProgram: TokenMetadataProgram.publicKey,\n});\nawait process_tx(conn, [ix], [CLI_UPDATE_AUTHORITY]);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"CLI_COMMAND=migrate_to_mpl \\\nCLI_POLICY_PUBKEY=TODO \\\nCLI_MINT=TODO \\\nCLI_UPDATE_AUTHORITY=./metadata_update_authority_keypair.json \\\nCLI_RPC=https://api.devnet.solana.com \\\n  ts-node sdk/src/cli.ts\n")),(0,a.kt)("h2",{id:"how-to-run-ocp-locally-for-development"},"How to run OCP locally (for development)"),(0,a.kt)("p",null,"Clone the repository to your local machine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:magiceden-oss/open_creator_protocol.git\n")),(0,a.kt)("p",null,"Setup, build, and test the codebase:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Install deps\nnpm i\n\n# To build and generate the solitarc\n./build.sh\n\n# To test\nanchor test\n")))}u.isMDXComponent=!0},8209:(t,e,o)=>{o(7294)}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2664],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(t),u=l,m=f["".concat(o,".").concat(u)]||f[u]||d[u]||r;return t?a.createElement(m,s(s({ref:n},c),{},{components:t})):a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[f]="string"==typeof e?e:l,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6151:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(7462),l=(t(7294),t(3905));const r={sidebar_position:38,sidebar_label:"\ud83d\udcf1 \u5728\u94b1\u5305\u4e2d\u5c55\u793aNFTs",sidebar_class_name:"green"},s="\ud83d\udcf1 \u5728\u94b1\u5305\u4e2d\u5c55\u793aNFTs",i={unversionedId:"Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-wallet/README",id:"Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-wallet/README",title:"\ud83d\udcf1 \u5728\u94b1\u5305\u4e2d\u5c55\u793aNFTs",description:"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u94f8\u9020\u4e86\u4e00\u4e2aNFT\uff0c\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u94f8\u9020\u4e00\u7cfb\u5217\u7684NFT\u3002\u6211\u4eec\u5c06\u4f7f\u7528Candy Machine\u6765\u5b8c\u6210\u8fd9\u4e2a\u4efb\u52a1\uff0c\u5b83\u662f\u4e00\u4e2aSolana\u7a0b\u5e8f\uff0c\u8ba9\u521b\u4f5c\u8005\u80fd\u591f\u5c06\u4ed6\u4eec\u7684\u8d44\u4ea7\u4e0a\u94fe\u3002\u8fd9\u4e0d\u662f\u521b\u5efa\u7cfb\u5217\u7684\u552f\u4e00\u65b9\u5f0f\uff0c\u4f46\u5728Solana\u4e0a\u5b83\u662f\u6807\u51c6\u7684\uff0c\u56e0\u4e3a\u5b83\u5177\u6709\u8bb8\u591a\u6709\u7528\u7684\u529f\u80fd\uff0c\u5982\u673a\u5668\u4eba\u4fdd\u62a4\u548c\u5b89\u5168\u968f\u673a\u5316\u3002\u4f60\u77e5\u9053\u600e\u4e48\u56de\u4e8b\u3002\u6a21\u677f\u65f6\u95f4\u3002\u7136\u800c\uff0c\u968f\u7740\u6211\u4eec\u6784\u5efa\u7684\u4e1c\u897f\u53d8\u5f97\u66f4\u597d\uff0c\u6211\u4eec\u7684\u6a21\u677f\u4e5f\u4f1a\u53d8\u5f97\u66f4\u597d\u3002\u8fd9\u6b21\u6211\u4eec\u5c06\u5728Solana dApp\u811a\u624b\u67b6\u7684\u57fa\u7840\u4e0a\u6784\u5efa\u4e00\u4e2a\u6a21\u677f\u3002\u548c\u4e4b\u524d\u7684\u6a21\u677f\u4e00\u6837\uff0c\u5b83\u662f\u4e00\u4e2a\u4f7f\u7528 create-next-app \u5236\u4f5c\u7684Next.js\u5e94\u7528\u7a0b\u5e8f\u3002\u4e0d\u540c\u7684\u662f\uff0c\u5b83\u6709\u66f4\u591a\u7684\u529f\u80fd\u3002\u4e0d\u7528\u62c5\u5fc3\uff01\u6211\u4eec\u4ecd\u7136\u4f1a\u4f7f\u7528\u76f8\u540c\u7684\u4e1c\u897f\u3002",source:"@site/docs/Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-wallet/README.md",sourceDirName:"Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-wallet",slug:"/Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-wallet/",permalink:"/all-in-one-solana/docs/Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-wallet/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-wallet/README.md",tags:[],version:"current",sidebarPosition:38,frontMatter:{sidebar_position:38,sidebar_label:"\ud83d\udcf1 \u5728\u94b1\u5305\u4e2d\u5c55\u793aNFTs",sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"\u5c55\u793aNFTs \ud83d\udc83",permalink:"/all-in-one-solana/docs/Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts/"},next:{title:"\ud83d\uddbc \u4ece\u7cd6\u679c\u673a\u5c55\u793aNFTs",permalink:"/all-in-one-solana/docs/Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-candy-machine/"}},o={},p=[],c={toc:p},f="wrapper";function d(e){let{components:n,...r}=e;return(0,l.kt)(f,(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-\u5728\u94b1\u5305\u4e2d\u5c55\u793anfts"},"\ud83d\udcf1 \u5728\u94b1\u5305\u4e2d\u5c55\u793aNFTs"),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u94f8\u9020\u4e86\u4e00\u4e2aNFT\uff0c\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u94f8\u9020\u4e00\u7cfb\u5217\u7684NFT\u3002\u6211\u4eec\u5c06\u4f7f\u7528Candy Machine\u6765\u5b8c\u6210\u8fd9\u4e2a\u4efb\u52a1\uff0c\u5b83\u662f\u4e00\u4e2aSolana\u7a0b\u5e8f\uff0c\u8ba9\u521b\u4f5c\u8005\u80fd\u591f\u5c06\u4ed6\u4eec\u7684\u8d44\u4ea7\u4e0a\u94fe\u3002\u8fd9\u4e0d\u662f\u521b\u5efa\u7cfb\u5217\u7684\u552f\u4e00\u65b9\u5f0f\uff0c\u4f46\u5728Solana\u4e0a\u5b83\u662f\u6807\u51c6\u7684\uff0c\u56e0\u4e3a\u5b83\u5177\u6709\u8bb8\u591a\u6709\u7528\u7684\u529f\u80fd\uff0c\u5982\u673a\u5668\u4eba\u4fdd\u62a4\u548c\u5b89\u5168\u968f\u673a\u5316\u3002\u4f60\u77e5\u9053\u600e\u4e48\u56de\u4e8b\u3002\u6a21\u677f\u65f6\u95f4\u3002\u7136\u800c\uff0c\u968f\u7740\u6211\u4eec\u6784\u5efa\u7684\u4e1c\u897f\u53d8\u5f97\u66f4\u597d\uff0c\u6211\u4eec\u7684\u6a21\u677f\u4e5f\u4f1a\u53d8\u5f97\u66f4\u597d\u3002\u8fd9\u6b21\u6211\u4eec\u5c06\u5728",(0,l.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/dapp-scaffold"},"Solana dApp\u811a\u624b\u67b6"),"\u7684\u57fa\u7840\u4e0a\u6784\u5efa\u4e00\u4e2a\u6a21\u677f\u3002\u548c\u4e4b\u524d\u7684\u6a21\u677f\u4e00\u6837\uff0c\u5b83\u662f\u4e00\u4e2a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"create-next-app")," \u5236\u4f5c\u7684Next.js\u5e94\u7528\u7a0b\u5e8f\u3002\u4e0d\u540c\u7684\u662f\uff0c\u5b83\u6709\u66f4\u591a\u7684\u529f\u80fd\u3002\u4e0d\u7528\u62c5\u5fc3\uff01\u6211\u4eec\u4ecd\u7136\u4f1a\u4f7f\u7528\u76f8\u540c\u7684\u4e1c\u897f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/buildspace/solana-display-nfts-frontend\ncd solana-display-nfts-frontend\ngit checkout starter\nnpm install @metaplex-foundation/js@latest\nnpm i\nnpm run dev\n")),(0,l.kt)("p",null,"\u4f60\u5e94\u8be5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost:3000")," \u4e0a\u770b\u5230\u8fd9\u4e2a:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(9757).Z,width:"1483",height:"911"})),(0,l.kt)("p",null,"\u201c\u663e\u793aNFT\u201d\u9875\u9762\u76ee\u524d\u8fd8\u6ca1\u6709\u663e\u793a\u4efb\u4f55\u5185\u5bb9 - \u8fd9\u5c31\u662f\u4f60\u7684\u4efb\u52a1\u6240\u5728\u3002"),(0,l.kt)("p",null,"\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"src/components/FetchNFT.tsx")," \uff0c\u6211\u4eec\u5f00\u59cb\u5427\u3002\u6211\u4eec\u5c06\u4ece\u7ec4\u4ef6\u9876\u90e8\u7684Metaplex\u8bbe\u7f6e\u5f00\u59cb\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"export const FetchNft: FC = () => {\n  const [nftData, setNftData] = useState(null)\n\n  const { connection } = useConnection()\n  const wallet = useWallet()\n  const metaplex = Metaplex.make(connection).use(walletAdapterIdentity(wallet))\n\n  const fetchNfts = async () => {}\n\n  return <div></div>\n}\n")),(0,l.kt)("p",null,"\u770b\u8d77\u6765\u5f88\u719f\u6089\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u6765\u586b\u5199 ",(0,l.kt)("inlineCode",{parentName:"p"},"fetchNfts")," \u51fd\u6570\u3002\u6211\u4eec\u5c06\u4f7f\u7528\u4e4b\u524d\u770b\u5230\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"findAllByOwner")," \u65b9\u6cd5\u3002\u6211\u4eec\u8fd8\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"useWallet")," \u94a9\u5b50\u6765\u83b7\u53d6\u94b1\u5305\u5730\u5740\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const fetchNfts = async () => {\n   if (!wallet.connected) {\n     return\n   }\n\n   // fetch NFTs for connected wallet\n   const nfts = await metaplex\n     .nfts()\n     .findAllByOwner({ owner: wallet.publicKey })\n\n   // fetch off chain metadata for each NFT\n   let nftData = []\n   for (let i = 0; i < nfts.length; i++) {\n     let fetchResult = await fetch(nfts[i].uri)\n     let json = await fetchResult.json()\n     nftData.push(json)\n   }\n\n   // set state\n   setNftData(nftData)\n }\n")),(0,l.kt)("p",null,"\u6211\u4eec\u60f3\u8981\u5728\u94b1\u5305\u66f4\u6539\u65f6\u66f4\u65b0\u663e\u793a\u7684NFTs\uff0c\u6240\u4ee5\u6211\u4eec\u5c06\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"useEffect")," \u51fd\u6570\u4e0b\u65b9\u6dfb\u52a0\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"fetchNfts")," \u94a9\u5b50\u6765\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"fetchNfts")," \u51fd\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"export const FetchNft: FC = () => {\n    ...\n\n  const fetchNfts = async () => {\n        ...\n  }\n\n  // fetch nfts when connected wallet changes\n  useEffect(() => {\n    fetchNfts()\n  }, [wallet])\n\n  return <div></div>\n}\n")),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u9700\u8981\u66f4\u65b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"return")," \u8bed\u53e5\u4ee5\u663e\u793aNFTs\u3002\u6211\u4eec\u5c06\u4f7f\u7528\u4e4b\u524d\u521b\u5efa\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"nftData")," \u72b6\u6001\u53d8\u91cf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"return (\n    <div>\n      {nftData && (\n        <div className={styles.gridNFT}>\n          {nftData.map((nft) => (\n            <div>\n              <ul>{nft.name}</ul>\n              <img src={nft.image} />\n            </div>\n          ))}\n        </div>\n      )}\n    </div>\n  )\n")),(0,l.kt)("p",null,"\u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u7684NFT\u4e86\uff01\ud83c\udf89 \u8fd9\u662f\u6211\u7684\u94b1\u5305\u957f\u4ec0\u4e48\u6837\u5b50 \ud83d\ude06"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(8675).Z,width:"1259",height:"696"})),(0,l.kt)("p",null,"\u56de\u5230\u8fc7\u53bb\u7684\u65e5\u5b50\uff08\u5927\u7ea6\u57282021\u5e7410\u6708\uff09\uff0c\u6211\u4e0d\u5f97\u4e0d\u624b\u52a8\u5b8c\u6210\u6240\u6709\u8fd9\u4e9b\u5de5\u4f5c\uff0c\u800c\u4e14\u6211\u4e00\u76f4\u53d7\u5230RPC\u7684\u901f\u7387\u9650\u5236\uff0c\u6240\u4ee5\u8bf7\u82b1\u70b9\u65f6\u95f4\u611f\u6fc0Metaplex\u5f00\u53d1\u4eba\u5458\u4e3a\u6211\u4eec\u5e26\u6765\u8fd9\u4e2a\u7cbe\u5f69\u7684SDK\uff01"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"nftData"),"\u8fd9\u91cc\u73a9\u4e00\u4e0b\u3002\u5c06\u5176\u8bb0\u5f55\u5230\u63a7\u5236\u53f0\u5e76\u5c1d\u8bd5\u663e\u793a\u5176\u4ed6\u503c\uff0c\u5982\u7b26\u53f7\u6216\u63cf\u8ff0\uff01\u4e5f\u8bb8\u6dfb\u52a0\u4e00\u4e2a\u8fc7\u6ee4\u5668\uff0c\u4ee5\u4fbf\u7528\u6237\u53ea\u80fd\u663e\u793a\u7279\u5b9a\u6536\u85cf\u7684NFT\uff1f"))}d.isMDXComponent=!0},9757:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/display-from-wallet-ab771e880d8a89ce190fc9d6c1bc8987.png"},8675:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/nfts-wallet-9b0d4678ead1e83ec711cd59e17325e0.png"}}]);
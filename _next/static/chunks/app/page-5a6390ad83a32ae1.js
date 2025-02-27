(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{6530:(e,a,s)=>{Promise.resolve().then(s.bind(s,1899))},1899:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>k});var l=s(5155);s(2115);var r=s(1589),t=s(3697),c=s(9827),o=s(709);let d=(0,c.v)()((0,o.Zr)(e=>({games:[],addGame:()=>{e(e=>({games:[...e.games,{id:(0,t.A)(),player1name:"player 1 name",player1score:"0",player2name:"player 2 name",player2score:"0",locked:!1}]}))},updatePlayer1Name:(a,s)=>{e(e=>({games:e.games.map(e=>(e.id===a&&(e.player1name=s),e))}))},updatePlayer1Score:(a,s)=>{e(e=>({games:e.games.map(e=>(e.id===a&&(e.player1score=s),e))}))},updatePlayer2Name:(a,s)=>{e(e=>({games:e.games.map(e=>(e.id===a&&(e.player2name=s),e))}))},updatePlayer2Score:(a,s)=>{e(e=>({games:e.games.map(e=>(e.id===a&&(e.player2score=s),e))}))},deleteGame:a=>{e(e=>({games:e.games.filter(e=>e.id!==a)}))},lockGame:a=>{e(e=>({games:e.games.map(e=>e.id===a?{...e,locked:!e.locked}:e)}))}}),{name:"johns-snooker-app_game-store",storage:(0,o.KU)(()=>localStorage)}));var m=s(1536);function n(e){let{games:a}=e,{updatePlayer1Name:s,updatePlayer1Score:t,updatePlayer2Name:c,updatePlayer2Score:o,deleteGame:n,lockGame:i}=d();return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"flex flex-row justify-between items-center bg-slate-700 shadow-black shadow-md mt-6 p-2 py-2 rounded-md text-sm",children:[(0,l.jsx)("button",{className:"".concat(a.locked?"bg-blue-600 hover:bg-blue-400":"bg-red-600 hover:bg-red-400"," shadow-gray-800 shadow-md ms-4 mr-4 p-3 rounded-md text-white"),onClick:()=>i(a.id),children:a.locked?(0,l.jsx)(m.JhU,{}):(0,l.jsx)(m.nQ7,{})}),(0,l.jsxs)("div",{className:"text-center grow",children:[(0,l.jsx)("p",{className:"mb-1",children:"Player 1"}),(0,l.jsx)("input",{className:"bg-slate-600 shadow-gray-800 shadow-md me-1 mb-4 ml-1 pt-1 pb-1 rounded-lg w-5/6 text-center",type:"text",value:a.player1name,onChange:e=>s(a.id,e.target.value),disabled:a.locked}),(0,l.jsx)("p",{className:"mb-1",children:"Player 2"}),(0,l.jsx)("input",{className:"bg-slate-600 shadow-gray-800 shadow-md me-1 mb-4 ml-1 pt-1 pb-1 rounded-md w-5/6 text-center",type:"text",value:a.player2name,onChange:e=>c(a.id,e.target.value),disabled:a.locked})]}),(0,l.jsxs)("div",{className:"text-center grow",children:[(0,l.jsx)("p",{className:"mb-1",children:"P1 Score"}),(0,l.jsx)("input",{className:"bg-slate-600 shadow-gray-800 shadow-md mb-4 pt-1 pb-1 rounded-md w-5/6 text-center",type:"text",value:a.player1score,onChange:e=>t(a.id,e.target.value),disabled:a.locked}),(0,l.jsx)("p",{className:"mb-1",children:"P2 Score"}),(0,l.jsx)("input",{className:"bg-slate-600 shadow-gray-800 shadow-md mb-4 pt-1 pb-1 rounded-md w-5/6 text-center",type:"text",value:a.player2score,onChange:e=>o(a.id,e.target.value),disabled:a.locked})]}),(0,l.jsx)("button",{className:"".concat(a.locked?"opacity-0":"bg-red-600 hover:bg-red-400","  shadow-gray-800 shadow-md ms-4 mr-4 p-3 rounded-md text-white"),onClick:()=>n(a.id),disabled:a.locked,children:(0,l.jsx)(r.GDL,{})})]},a.id)})}function i(){let{games:e,addGame:a}=d();return(0,l.jsxs)("div",{className:"p-2 w-full text-center",children:[(0,l.jsx)("h1",{className:"mb-4 text-4xl",children:"Match History"}),(0,l.jsxs)("button",{className:"flex flex-row bg-green-600 hover:bg-green-500 px-2 py-1 rounded-md",onClick:a,children:[(0,l.jsx)(r.OiG,{className:"me-2 mt-1"}),"Add Game"]}),(0,l.jsx)(l.Fragment,{children:e.map(e=>(0,l.jsx)(n,{games:e},e.id))})]})}let x=(0,c.v)()((0,o.Zr)(e=>({tracker:{player1name:"",player2name:"",player1score:0,player2score:0,playerselector:!0,colourLock:!0},updatePlayer1Name:a=>{e(e=>({tracker:{...e.tracker,player1name:a}}))},updatePlayer2Name:a=>{e(e=>({tracker:{...e.tracker,player2name:a}}))},updateScore:a=>{e(e=>({tracker:{...e.tracker,player1score:e.tracker.playerselector?e.tracker.player1score+a:e.tracker.player1score,player2score:e.tracker.playerselector?e.tracker.player2score:e.tracker.player2score+a}}))},switchPlayer:()=>{e(e=>({tracker:{...e.tracker,playerselector:!e.tracker.playerselector,colourLock:!0}}))},switchColour:()=>{e(e=>({tracker:{...e.tracker,colourLock:!e.tracker.colourLock}}))},resetScreen:()=>{e(e=>({tracker:{...e.tracker,player1name:"",player2name:"",player1score:0,player2score:0,playerselector:!0,colourLock:!0}}))}}),{name:"johns-snooker-app_tracker-store",storage:(0,o.KU)(()=>localStorage)}));var h=s(2950),u=s(2045),p=s(1889),g=s(3117);function b(){let{tracker:e,updatePlayer1Name:a,updatePlayer2Name:s,updateScore:r,switchPlayer:t,resetScreen:c,switchColour:o}=x(),d=e=>{r(e)};return(0,l.jsxs)("div",{className:"items-center",children:[(0,l.jsx)("h1",{className:"flex justify-center pt-4 text-4xl text-center",children:"Game Tracker"}),(0,l.jsxs)("div",{className:"flex justify-evenly items-center mb-4 pt-4",children:[(0,l.jsx)("div",{className:"",children:(0,l.jsx)("button",{className:"bg-rose-700 hover:bg-rose-500 shadow-gray-800 shadow-md p-3 rounded-md text-white",children:(0,l.jsx)(u.kmZ,{className:"w-8 h-8",onClick:()=>c()})})}),(0,l.jsx)("div",{className:"",children:(0,l.jsx)("button",{className:"bg-green-700 hover:bg-green-500 shadow-gray-800 shadow-md p-3 rounded-md text-white",children:(0,l.jsx)(h.bU$,{className:"w-8 h-8"})})})]}),(0,l.jsxs)("div",{className:"flex flex-col bg-slate-700 rounded-lg",children:[(0,l.jsxs)("div",{className:"flex justify-center",children:[(0,l.jsxs)("div",{className:"flex flex-col items-start bg-slate-700 p-2 rounded-lg",children:[e.playerselector?(0,l.jsx)(p.jQr,{className:"mb-2 w-12 h-12 text-yellow-400"}):(0,l.jsx)(p.jQr,{className:"mb-2 w-12 h-12 text-slate-700"}),(0,l.jsxs)("div",{className:"flex flex-col items-center w-full",children:[(0,l.jsx)("p",{className:"mb-1 ml-4",children:"Player 1 Name"}),(0,l.jsx)("input",{className:"bg-slate-600 shadow-gray-800 shadow-md mb-4 p-2 rounded-lg w-48 text-center",type:"text",value:(null==e?void 0:e.player1name)||"",onChange:e=>null==a?void 0:a(e.target.value)}),(0,l.jsx)("p",{className:"mb-1 ml-4",children:"Player 1 Score"}),(0,l.jsx)("input",{className:"bg-slate-600 shadow-gray-800 shadow-md p-2 rounded-lg w-48 text-center",type:"text",value:(null==e?void 0:e.player1score)||0})]})]}),(0,l.jsxs)("div",{className:"flex flex-col items-end bg-slate-700 p-2 rounded-lg",children:[e.playerselector?(0,l.jsx)(p.jQr,{className:"mb-2 w-12 h-12 text-slate-700"}):(0,l.jsx)(p.jQr,{className:"mb-2 w-12 h-12 text-yellow-400"}),(0,l.jsxs)("div",{className:"flex flex-col items-center w-full",children:[(0,l.jsx)("p",{className:"mr-4 mb-1",children:"Player 2 Name"}),(0,l.jsx)("input",{className:"bg-slate-600 shadow-gray-800 shadow-md mb-4 p-2 rounded-lg w-48 text-center",type:"text",value:(null==e?void 0:e.player2name)||"",onChange:e=>null==s?void 0:s(e.target.value)}),(0,l.jsx)("p",{className:"mr-4 mb-1 center",children:"Player 2 Score"}),(0,l.jsx)("input",{className:"bg-slate-600 shadow-gray-800 shadow-md p-2 rounded-lg w-48 text-center",type:"text",value:(null==e?void 0:e.player2score)||0})]})]})]}),(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsx)("button",{className:"bg-blue-600 hover:bg-blue-500 shadow-md m-4 px-6 py-3 rounded-lg font-bold text-white",onClick:()=>t(),children:"Switch Player"})})]}),(0,l.jsx)("div",{className:"flex justify-center items-center bg-slate-700 mt-4 mb-4 rounded-lg",children:(0,l.jsx)("button",{onClick:()=>{d(1),o()},disabled:!e.colourLock,children:e.colourLock?(0,l.jsx)(m.Qp1,{className:"p-3 rounded-md w-16 h-16 text-red-700 hover:text-red-500"}):(0,l.jsx)(g.PXm,{className:"opacity-50 p-3 rounded-md w-16 h-16 text-white cursor-not-allowed"})})}),(0,l.jsxs)("div",{className:"flex justify-evenly items-center bg-slate-700 mt-4 mb-4 rounded-lg",children:[(0,l.jsx)("button",{onClick:()=>{d(2),o()},disabled:e.colourLock,children:e.colourLock?(0,l.jsx)(g.PXm,{className:"opacity-50 m-2 rounded-md w-8 h-8 text-white cursor-not-allowed"}):(0,l.jsx)(m.Qp1,{className:"m-2 rounded-md w-8 h-8 text-yellow-500 hover:text-yellow-300"})}),(0,l.jsx)("button",{onClick:()=>{d(3),o()},disabled:e.colourLock,children:e.colourLock?(0,l.jsx)(g.PXm,{className:"opacity-50 m-2 rounded-md w-8 h-8 text-white cursor-not-allowed"}):(0,l.jsx)(m.Qp1,{className:"m-2 rounded-md w-8 h-8 text-green-700 hover:text-green-500"})}),(0,l.jsx)("button",{onClick:()=>{d(4),o()},disabled:e.colourLock,children:e.colourLock?(0,l.jsx)(g.PXm,{className:"opacity-50 m-2 rounded-md w-8 h-8 text-white cursor-not-allowed"}):(0,l.jsx)(m.Qp1,{className:"m-2 rounded-md w-8 h-8 text-amber-900 hover:text-amber-800"})}),(0,l.jsx)("button",{onClick:()=>{d(5),o()},disabled:e.colourLock,children:e.colourLock?(0,l.jsx)(g.PXm,{className:"opacity-50 m-2 rounded-md w-8 h-8 text-white cursor-not-allowed"}):(0,l.jsx)(m.Qp1,{className:"m-2 rounded-md w-8 h-8 text-blue-700 hover:text-blue-500"})}),(0,l.jsx)("button",{onClick:()=>{d(6),o()},disabled:e.colourLock,children:e.colourLock?(0,l.jsx)(g.PXm,{className:"opacity-50 m-2 rounded-md w-8 h-8 text-white cursor-not-allowed"}):(0,l.jsx)(m.Qp1,{className:"m-2 rounded-md w-8 h-8 text-rose-500 hover:text-rose-300"})}),(0,l.jsx)("button",{onClick:()=>{d(7),o()},disabled:e.colourLock,children:e.colourLock?(0,l.jsx)(g.PXm,{className:"opacity-50 m-2 rounded-md w-8 h-8 text-white cursor-not-allowed"}):(0,l.jsx)(m.Qp1,{className:"m-2 rounded-md w-8 h-8 text-black hover:text-neutral-800"})})]})]})}var y=s(9507),w=s(5331);let j=(0,c.v)(e=>({isScreenActive:!1,toggleScreenState:()=>{e(e=>({isScreenActive:!e.isScreenActive}))}}));function k(){let{toggleScreenState:e,isScreenActive:a}=j();return(0,l.jsxs)("div",{className:"flex flex-col items-center bg-slate-800 min-h-screen text-white",children:[(0,l.jsx)("div",{className:"bg-slate-900 shadow-md p-4 pt-12 w-full text-center",children:(0,l.jsx)("h1",{className:"font-semibold text-xl",children:"Snooker App"})}),(0,l.jsx)("h2",{className:"pt-6 text-lg",children:"Switch Between History and Tracker"}),(0,l.jsx)("button",{onClick:e,className:"mt-4 px-4 py-4 rounded-lg font-medium text-white shadow-md transition ".concat(a?"bg-green-600 hover:bg-green-700":"bg-blue-600 hover:bg-blue-700"),children:a?(0,l.jsx)(y.zsA,{className:"w-12 h-12"}):(0,l.jsx)(w.EXZ,{className:"w-12 h-12"})}),a?(0,l.jsx)(b,{}):(0,l.jsx)(i,{})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[897,429,150,613,271,672,446,711,665,441,517,358],()=>a(6530)),_N_E=e.O()}]);
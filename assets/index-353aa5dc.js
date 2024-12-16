import{s as o,M as c,j as t,r as p}from"./index-780988ce.js";import{g as x,P as d}from"./groupBy-d12bd137.js";import{O as h}from"./OpenGraph-500aa841.js";const m=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 100px;
`,f=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`,g=o.div`
  margin-bottom: 15px;
  font-size: 30px;
  text-align: center;
`,b=o.div`
  padding-bottom: 15px;
  font-size: 20px;
  text-align: center;
`,u=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  top: 0;
  width: '100%';
`,j=o.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 70vw;
  margin-bottom: 12px;
  gap: 24px;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 0 15px;

  @media ${c} {
    justify-content: flex-start;
  }
`,v=o.div`
  line-height: 50px;
  font-size: 17px;
  cursor: pointer;
  color: ${({$isSelected:e,theme:n})=>e?n.color.black:n.color.black_alpha2};
`,w=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,y=o.div`
  min-height: 130px;
  width: 100%;
  position: relative;
`,k=o.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  max-width: 70vw;
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;

  &:hover {
    background-color: ${({theme:e})=>e.color.medium};
    @media ${c} {
      background-color: transparent;
    }
  }
  @media ${c} {
    &:active {
      background-color: ${({theme:e})=>e.color.medium};
    }
  }
`,C=o.div`
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 1.4;
`,P=o.p`
  font-size: 13px;
  margin-bottom: 20px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  word-break: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,$=o.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  width: 100%;
  padding: 0 15px;
  color: ${({theme:e})=>e.color.black_alpha2};
  position: absolute;
  bottom: 10px;
`,T=o.div`
  cursor: pointer;
  color: ${({theme:e})=>e.color.black_alpha2};
`,z=({post:e,onClickCategory:n})=>{const{title:s,link:l,date:a,category:i,briefContents:r}=e;return t.jsxs(y,{children:[t.jsxs(k,{href:l,target:"_blank",rel:"noopener noreferrer",children:[t.jsx(C,{className:"title",children:s}),t.jsx(P,{children:r})]},s),t.jsxs($,{children:[t.jsx("div",{children:a}),t.jsx(T,{onClick:()=>n(i),children:i})]})]})},E=["All","React","잡담","회고"],S=()=>{const[e,n]=p.useState("All"),s=x(d,({category:i})=>i),l=e==="All"?d:s[e],a=i=>{n(i)};return t.jsxs(t.Fragment,{children:[t.jsx(h,{title:"석이 | Post"}),t.jsxs(m,{children:[t.jsxs(f,{children:[t.jsx(g,{children:e}),t.jsxs(b,{children:[l.length," posts"]})]}),t.jsx(u,{children:t.jsx(j,{children:E.map((i,r)=>t.jsx(v,{onClick:()=>a(i),$isSelected:i===e,children:i},r))})}),t.jsx(w,{children:l.map(i=>t.jsx(z,{post:i,onClickCategory:r=>a(r)},i.title))})]})]})};export{S as default};

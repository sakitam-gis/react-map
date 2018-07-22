webpackJsonp(["examples/map/demo"],{Pv6v:function(n,a,s){n.exports={content:[["h2","summary"],["p","\u5730\u56fe\u57fa\u672c\u5c55\u793a\u3002"]],meta:{order:0,title:"\u57fa\u7840\u4f7f\u7528",filename:"examples/map/demo/basic.md",id:"examples-map-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#summary",title:"summary"},"summary"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Slider<span class="token punctuation">,</span> InputNumber<span class="token punctuation">,</span> Row<span class="token punctuation">,</span> Col <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Map<span class="token punctuation">,</span> TileLayer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@sakitam-gis/react-map\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'./basic.less\'</span><span class="token punctuation">;</span>\n<span class="token keyword">class</span> <span class="token class-name">Index</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  constructor <span class="token punctuation">(</span>props<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n        zoom<span class="token punctuation">:</span> <span class="token number">14</span><span class="token punctuation">,</span>\n        fov<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n        pitch<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n        bearing<span class="token punctuation">:</span> <span class="token number">0</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  \n      <span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  \n    componentDidMount <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">}</span>\n  \n    handleMapLoad <span class="token operator">=</span> <span class="token punctuation">(</span>map<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> map<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  \n    handleClick <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">,</span> type<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> <span class="token punctuation">{</span> zoom <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">\'plus\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          zoom<span class="token punctuation">:</span> zoom <span class="token operator">+</span> <span class="token number">1</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          zoom<span class="token punctuation">:</span> zoom <span class="token operator">-</span> <span class="token number">1</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  \n    onChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">,</span> type<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  \n    render <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> <span class="token punctuation">{</span> zoom<span class="token punctuation">,</span> fov<span class="token punctuation">,</span> pitch<span class="token punctuation">,</span> bearing <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>example-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span>\n            <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>map-content<span class="token punctuation">"</span></span>\n            <span class="token attr-name">center</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">0.113049</span><span class="token punctuation">,</span> <span class="token number">51.498568</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">zoom</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>zoom<span class="token punctuation">}</span></span>\n            <span class="token attr-name">pitch</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>pitch<span class="token punctuation">}</span></span>\n            <span class="token attr-name">bearing</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>bearing<span class="token punctuation">}</span></span>\n            <span class="token attr-name">fov</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>fov<span class="token punctuation">}</span></span>\n            <span class="token attr-name">events</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              onload<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleMapLoad\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TileLayer</span>\n              <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>layer<span class="token punctuation">"</span></span>\n              <span class="token attr-name">renderer</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>gl<span class="token punctuation">"</span></span>\n              <span class="token attr-name">urlTemplate</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png<span class="token punctuation">"</span></span>\n              <span class="token attr-name">subdomains</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'a\'</span><span class="token punctuation">,</span> <span class="token string">\'b\'</span><span class="token punctuation">,</span> <span class="token string">\'c\'</span><span class="token punctuation">,</span> <span class="token string">\'d\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Map</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>example-top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tool-label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>pitch\uff1a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">60</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> <span class="token string">\'pitch\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>pitch<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span>\n                  <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n                  <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">60</span><span class="token punctuation">}</span></span>\n                  <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n                  <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>pitch<span class="token punctuation">}</span></span>\n                  <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> <span class="token string">\'pitch\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n                <span class="token punctuation">/></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tool-label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>bearing\uff1a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">360</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> <span class="token string">\'bearing\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>bearing<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span>\n                  <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n                  <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">360</span><span class="token punctuation">}</span></span>\n                  <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n                  <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>bearing<span class="token punctuation">}</span></span>\n                  <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> <span class="token string">\'bearing\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n                <span class="token punctuation">/></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tool-label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>fov\uff1a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">55</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> <span class="token string">\'fov\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>fov<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span>\n                  <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n                  <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">55</span><span class="token punctuation">}</span></span>\n                  <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n                  <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>fov<span class="token punctuation">}</span></span>\n                  <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> <span class="token string">\'fov\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n                <span class="token punctuation">/></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>example-tool<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>plus<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> <span class="token string">\'plus\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>minus<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> <span class="token string">\'minus\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Index</span> <span class="token punctuation">/></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s("GiK3"),a=(s("O27J"),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),t=s("nFWT"),p=s("lVK7");s("lQhe");var o=function(s){function o(n,a){!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,o);var s=function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,n,a));return s.handleMapLoad=function(n){s.map=n},s.handleClick=function(n,a){var t=s.state.zoom;"plus"===a?s.setState({zoom:t+1}):s.setState({zoom:t-1})},s.onChange=function(n,a){s.setState(function(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}({},a,n))},s.state={zoom:14,fov:0,pitch:0,bearing:0},s.map=null,s}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(o,n.Component),a(o,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var a=this,s=this.state,o=s.zoom,c=s.fov,e=s.pitch,u=s.bearing;return n.createElement("div",{className:"example-content"},n.createElement(p.Map,{className:"map-content",center:[-.113049,51.498568],zoom:o,pitch:e,bearing:u,fov:c,events:{onload:this.handleMapLoad}},n.createElement(p.TileLayer,{id:"layer",renderer:"gl",urlTemplate:"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",subdomains:["a","b","c","d"]})),n.createElement("div",{className:"example-top"},n.createElement(t.Row,null,n.createElement(t.Col,{span:4},n.createElement("span",{className:"tool-label"},"pitch\uff1a")),n.createElement(t.Col,{span:8},n.createElement(t.Slider,{min:0,max:60,onChange:function(n){return a.onChange(n,"pitch")},value:e})),n.createElement(t.Col,{span:4},n.createElement(t.InputNumber,{min:0,max:60,style:{marginLeft:16},value:e,onChange:function(n){return a.onChange(n,"pitch")}}))),n.createElement(t.Row,null,n.createElement(t.Col,{span:4},n.createElement("span",{className:"tool-label"},"bearing\uff1a")),n.createElement(t.Col,{span:8},n.createElement(t.Slider,{min:0,max:360,onChange:function(n){return a.onChange(n,"bearing")},value:u})),n.createElement(t.Col,{span:4},n.createElement(t.InputNumber,{min:0,max:360,style:{marginLeft:16},value:u,onChange:function(n){return a.onChange(n,"bearing")}}))),n.createElement(t.Row,null,n.createElement(t.Col,{span:4},n.createElement("span",{className:"tool-label"},"fov\uff1a")),n.createElement(t.Col,{span:8},n.createElement(t.Slider,{min:0,max:55,onChange:function(n){return a.onChange(n,"fov")},value:c})),n.createElement(t.Col,{span:4},n.createElement(t.InputNumber,{min:0,max:55,style:{marginLeft:16},value:c,onChange:function(n){return a.onChange(n,"fov")}})))),n.createElement("div",{className:"example-tool"},n.createElement(t.Button,{type:"primary",shape:"circle",icon:"plus",onClick:function(n){return a.handleClick(n,"plus")}}),n.createElement(t.Button,{type:"primary",shape:"circle",icon:"minus",onClick:function(n){return a.handleClick(n,"minus")}})))}}]),o}();return n.createElement(o,null)}}},lQhe:function(n,a){},q4aG:function(n,a,s){n.exports={basic:s("Pv6v")}}});
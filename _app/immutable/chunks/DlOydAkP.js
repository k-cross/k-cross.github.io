import{f as s,s as o,c as i,a as l,d as r,r as p,n as c}from"./csxxA4KV.js";import"./DnvDsx5o.js";import{h as u}from"./RIcatvwn.js";const m={layout:"post",title:"Elixir Impressions",author:["Ken Cross"],tags:["Opinion","Software Engineering"],excerpt:"TLDR: Elixir is awesome!!!",date:"2018-07-07T00:00:00.000Z",draft:!1},{layout:k,title:y,author:b,tags:w,excerpt:v,date:x,draft:_}=m;var d=s(`<p>I’ve had the luxury of programming with <em>elixir</em> for the last nine months.
It’s been my first full-time experience utilizing a functional language in a non-academic setting. <em>Elixir</em> is a new language built on top of <em>erlang</em>.
It looks similar to <em>ruby</em> but the semantics are quite different.</p> <p>Coming from a <em>c</em> and <em>python</em> background, the language has been expressive, powerful, and refreshingly different.
Its tooling makes it a pleasurable experience to work with and easy to get started on any new project.
But the real fun comes from the language itself.
Parallel, concurrent and distributed programming semantics are top notch and built directly into the language or provided by standard libraries.
Have one process that needs to talk to another? Just create a simple <code>GenServer</code>.
Need to create a K/V store? There’s <code>ETS</code>.
Does that store need to be available across multiple nodes and persist? There’s <code>mnesia</code>.</p> <p>There are so many good solutions that are readily available to access with minimal effort.
Most modern web applications utilize these tools, yet most languages only think about these requirements as afterthoughts.
Applications can scale without the immediate and common constraints of other languages, making it easier for startups to focus on the problem domain.
It’s less common to need specialized solutions like <code>redis</code> or <code>kafka</code> since similar tooling’s baked into <em>elixir</em> already.
In many cases, the language tooling is the desired approach because the application can be built around business logic rather than infrastructure choices, creating less operational burdens.
It also is closer to the business logic in a natural way which is less common in other languages trying to respect domain boundaries.
There are still times when reaching for an external tool is required and the libraries that wrap common tools to be consumed in the language are either really good and well supported or completely lacking.
Since <em>erlang</em> is in the picture, it’s really easy to natively call and use <em>erlang</em> libraries directly making the language far more mature in tooling than most at a similar age.</p> <p>The language is also infinitely flexible as it includes <em>macros</em>, a form of <em>metaprogramming</em>, by which the language can be extended by anyone.
Tired of writing the same boiler-plate code over and over? Write a macro!
The amount of thought that goes into the everyday usage of the language is also nice, since there’s a fresh take on doing things the <code>erlang</code> way.
Case in point is the <code>with</code> statement, its inclusion wasn’t necessary but certainly makes simple patterns much easier to deal with and manage.</p> <pre class="language-elixir"><!></pre> <p>That’s far easier to grok both syntactically and by length.
The <code>with</code> implementation is just a macro that expands into nested <code>case</code> statements under the hood.
It’s possible to keep this looking pretty by making function wrappers for case statements, but that’s essentially what <code>with</code> does in a generic way already.
Using the <code>with</code> statement is elegant for long chains of validation statements, making the code’s intent clear.</p> <p>Personally, the benefits of <em>elixir</em> extend beyond code.
It’s allowed me to fully switch into the mindset of functional programming.
It’s opened an entirely new paradigm of problem solving tools that have been mostly better than their OOP alternatives.</p> <p>All things considered, <em>elixir</em> is an amazing language with great tooling built on top of the incredibly reliable <em>BEAM</em>.
The community is also very welcoming and friendly.
If you’re looking for a new language or skill to pick up, I urge you to try <em>elixir</em>.
It is a great way to expand your knowledge base and understanding of a variety of topics.</p> <h2 id="updates-for-2020"><a href="#updates-for-2020">Updates for 2020</a></h2> <p>I’m still using <em>elixir</em> in 2020 and it’s still an amazing language.
The tooling keeps improving and the community is getting larger which means the packages available are also increasing.
Utilizing the actor model allowed our programs to run very reliably with minimal issue, while maximizing the ability to parallel process requests at a granular level.
A similar workload and application that was written in <em>PHP</em> and serves less overall traffic requires upwards of 20 AWS instances.
Contrasting that to our current <em>elixir</em> application, our maximum autoscale group now reaches 4 AWS instances, all of which are smaller and cheaper instance types by comparison.
Using <em>elixir</em> actively saves money on <em>operational expenses</em> because it utilizes resources effectively.</p> <p>One caveat, I mentioned in the past about using <code>mnesia</code> and hinted at using <code>distributed erlang</code>.
Each of those tools can work but they are specialized and should probably be avoided.
Distributed computation is a hard problem and these tools were built with different use cases than the modern web.
Knowing what the trade-offs are is invaluable since there are probably better options available for distributed computation.
This will probably change over time but as of today I cannot in good conscience recommend the out-of-box tooling for this.</p> <p>The language is still great for a large variety of use cases and there many things that make it a joy to work with.
The actor model is baked into the language itself and feels like it belongs directly in the language itself, unlike many actor frameworks in other languages.
At the end of the day, its possible to make any language work for the problem at hand.
For the majority of non-computationally heavy workloads, <em>elixir</em> still remains my goto language, even in a distributed computing world!</p>`,1);function I(n){var e=d(),a=o(i(e),8),t=r(a);u(t,()=>`<code class="language-elixir">error_tuple <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token atom symbol">:error</span><span class="token punctuation">,</span> <span class="token string">"function isn't fun"</span><span class="token punctuation">&#125;</span>

<span class="token comment"># Before &#96;with&#96;</span>
<span class="token keyword">case</span> <span class="token function">fun_fun_function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">do</span>
  <span class="token punctuation">&#123;</span><span class="token atom symbol">:ok</span><span class="token punctuation">,</span> val<span class="token punctuation">&#125;</span> <span class="token operator">-></span>
    <span class="token keyword">case</span> <span class="token function">fun_function</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token keyword">do</span>
      <span class="token punctuation">&#123;</span><span class="token atom symbol">:ok</span><span class="token punctuation">,</span> val2<span class="token punctuation">&#125;</span> <span class="token operator">-></span> <span class="token function">do_stuff_with</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> val2<span class="token punctuation">)</span>
      _ <span class="token operator">-></span> error_tuple
    <span class="token keyword">end</span>
  _ <span class="token operator">-></span>
    error_tuple
<span class="token keyword">end</span>

<span class="token comment"># Afer &#96;with&#96;</span>
with <span class="token punctuation">&#123;</span><span class="token atom symbol">:ok</span><span class="token punctuation">,</span> val<span class="token punctuation">&#125;</span> <span class="token operator">&lt;-</span> <span class="token function">fun_fun_function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token punctuation">&#123;</span><span class="token atom symbol">:ok</span><span class="token punctuation">,</span> val2<span class="token punctuation">&#125;</span> <span class="token operator">&lt;-</span> <span class="token function">fun_function</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token keyword">do</span>
  <span class="token function">do_stuff_with</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> val2<span class="token punctuation">)</span>
<span class="token keyword">else</span>
  _ <span class="token operator">-></span> error_tuple
<span class="token keyword">end</span></code>`),p(a),c(14),l(n,e)}export{I as default,m as metadata};

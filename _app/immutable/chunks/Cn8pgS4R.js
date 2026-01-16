import{f as a,a as i}from"./jsoj6myH.js";import"./dyMr-lLW.js";import{n}from"./_0ZiNUPF.js";const o={layout:"post",title:"Osmosis Driven Development",author:["Ken Cross"],tags:["Opinion","Software Engineering"],excerpt:"How context drives the engineering process",date:"2018-10-29T00:00:00.000Z",modified:"2020-08-08T00:00:00.000Z",draft:!1},{layout:h,title:m,author:d,tags:u,excerpt:p,date:f,modified:g,draft:b}=o;var s=a(`<p>In a magical world where all tasks are well defined, performing task or implement feature is a simple matter of doing.
In this world only the current state of the feature needs to be communicated.
A product manager informs stakeholders what engineering is capable of based on raw metrics, creating hard deadlines meaningful to clients.
Time is used as the sole metric to measure progress and productivity.
Unfortunately, there’s a lot of grey area back in the non-magical realm of Earth.</p> <p>Well-defined tasks are rare in businesses with high uncertainty, volatility, or both.
Key factors contributing to uncertainty are related to context.
A ticket describing a task is often created by someone operating with language and context that may not translate to the person performing the task.
Engineers usually have contextual concerns related to the inner-workings of a running system, even when the customer problem is known other departments own its context.
What can accelerate desired outcomes and increase the effectiveness of collaboration?</p> <p>At the team level, distributing context and customer feedback between colleagues handling the same project is critical.
Team members have the opportunity to create a shared language for the project, rather than specific field jargon segmented between different types of team members.
Clarity between communication channels results because individuals talk about the same things rather than things that are off-center or tangential.
The idea is to create communication based feedback loops.
Making this loop as quick as possible is ideal since it’s used as a qualitative measure of effort.
With a slow feedback loop, more effort is spent on work that ends up misaligned with either customer or organizational goals.</p> <p>For individuals, providing relevant context is about determining who the target audience is.
Determining what’s useful then providing that knowledge in a format that’s easily consumable.
Gauging what an audience needs to hear and presenting technical information in an understandable way will provide insight to other organization functions.
Increased communication has the potential to simplify problem solutions; it’ll demonstrate both process and technical bottlenecks; finally, it provides power to persuade.
For example, it’s valuable to be able to:</p> <ul><li>demonstrate to product management why a particular feature is harder to build than expected</li> <li>explain why changing the shape of production data without certainty is a bad idea</li></ul> <p>Providing insight to people in a position to fight or push back deadlines, might do just that, provided they receive information that updates their native context.</p> <h2 id="maximum-value-for-least-effort"><a href="#maximum-value-for-least-effort">Maximum Value for Least Effort</a></h2> <p>The <em>MVP</em> (minimum viable product) is an infamous term that’s meaningful in the context of a new product.
Building an MVP is hard particularly when features are designed as MVPs on top of an MVP because there’s a good chance it requires compromises to <em>existing</em> features and functionality.
As an application’s complexity increases, the MVP model to feature development becomes less relevant.
Rapid prototyping should still be part of the development process, but prototypes are designed to reduce uncertainty, not become MVPs.
As the term mentions, MVP applies to <em>products</em> not <em>features</em> so let’s posit that the goals of an MVP are the same for new features.</p> <ol><li>maximize value while performing least amount of work</li> <li>ship as quickly as possible</li> <li>initialize client feedback loop determining signal to noise ratio</li></ol> <p>Building out MVPs often means catering to solving the subset of a more generalized problem.
The <em>base case</em> of a problem is it’s most generic form, which might be the least commonly used case.
The <em>special case</em> is a specific form of the same problem which may be simpler or more complex.
In the stance of a special case, the base case is often required to be built to have the scaffolding ready for future features.
If the special case is built without regard to the base case then duplicated effort results.
When little effort is necessary to shift directions, the MVP makes sense, otherwise it’s not a useful design strategy.</p> <h2 id="builders-conundrum"><a href="#builders-conundrum">Builder’s Conundrum</a></h2> <p>A problem by which the <em>builder</em> creates something to be consumed in a domain which the <em>builder</em> is unfamiliar.
Imagine being new to a very large code base and assigned a critical new feature with a hard deadline.
The design choices around data or public API endpoints are long lasting, but it’s unlikely to be correct when incremental, measured progress is the goal.
It’s unclear how customers use APIs and it’s also unfortunate when the shape of production data difficult to work with.</p> <p>How can an engineer solve problems for customers when all the information that’s given is, <em>implement feature X?</em> Understanding how customers use a product is critical to the design and implementation of new features.
While the product team answers these questions, it’s valuable as an engineer to understand the context behind the solutions.
Having context results in a few benefits;
happier customers because solutions are designed for the problem they care about, rather than <em>using what was designed as a _workaround for the problem they care about</em>;
happier engineers because their autonomy increased, making judgment calls regarding the solution’s architecture, resulting in less effort and technical debt;
happier designers and product managers because resulting features are higher quality and more in line with what clients expect.</p> <p>Humans don’t absorb information, it’s curated and consumed.
Understanding the limitations of MVPs increases the understanding of overall feature effort with respect to the product’s phase in its life-cycle.
For engineers, distilling technical knowledge into easy summaries that can be consumed by non-technical people will help persuade peers in other functions to fight for the important things.
As engineers, understanding key components of why this feature is being built or how this product is being used allows for better implementation strategies and insight for meaningful compromises.
This makes life more comfortable since overly ambitious partner commitments are less likely to occur, if we posit that colleagues are not malicious, otherwise all bets are off.</p>`,1);function w(e){var t=s();n(26),i(e,t)}export{w as default,o as metadata};

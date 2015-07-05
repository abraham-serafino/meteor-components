Meteor Components
=================

Recently Web Components have become "all the rage," with Polymer serving as
the reference implementation. On my LinkedIn Pulse, I've shown you how
to quickly and easily add Polymer to your MeteorJS webapp, but you can
also see how to use Meteor to throw together a components-like architecture
without any plugins or polyfills.

Files
=====
<table>
<tr><td>meteor-components.html</td><td>Shows you how you can (re)use the components with different data contexts</td></tr>
<tr><td>ams-counter.html</td><td>This is the "template" portion of the amsCounter webcomponent. Note that the ID ("my-btn") of the button is only visible from inside a given instance of the template</td></tr>
<tr><td>ams-counter.js</td><td>This file demonstrates how to provide a separate "scope" for each instance of a component using Reactive Variables, and how you can set event handlers by ID without interfering with the same button in other instances of the same component</td></tr>
</table>

Setup
=====

You will need to:

<pre>meteor add reactive</pre>

in order to get the example to work.

You might also want to:

<pre>meteor add nemo64:bootsrap less</pre>

if you'd like the demo to be a bit more visually appealing.
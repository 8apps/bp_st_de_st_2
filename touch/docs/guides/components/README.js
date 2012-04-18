Ext.data.JsonP.components({"title":"Components","guide":"<h1>Using Components in Sencha Touch 2</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/components-section-1'>What is a Component?</a></li>\n<li><a href='#!/guide/components-section-2'>What is a Container?</a></li>\n<li><a href='#!/guide/components-section-3'>Instantiating Components</a></li>\n<li><a href='#!/guide/components-section-4'>Configuring Components</a></li>\n<li><a href='#!/guide/components-section-5'>Using xtype</a></li>\n<li><a href='#!/guide/components-section-6'>Adding Components to Containers</a></li>\n<li><a href='#!/guide/components-section-7'>Showing and Hiding Components</a></li>\n<li><a href='#!/guide/components-section-8'>Events</a></li>\n<li><a href='#!/guide/components-section-9'>Docking</a></li>\n<li><a href='#!/guide/components-section-10'>Destroying Components</a></li>\n</ol>\n</div>\n\n<h2 id='components-section-1'>What is a Component?</h2>\n\n<p>Most of the visual classes you interact with in Sencha Touch are Components. Every Component in Sencha Touch is a subclass of <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>, which means they can all:</p>\n\n<ul>\n<li>Render themselves onto the page using a template</li>\n<li>Show and hide themselves at any time</li>\n<li>Center themselves on the screen</li>\n<li>Enable and disable themselves</li>\n</ul>\n\n\n<p>They can also do a few more advanced things:</p>\n\n<ul>\n<li>Float above other components (windows, message boxes and overlays)</li>\n<li>Change size and position on the screen with animation</li>\n<li>Dock other Components inside itself (useful for toolbars)</li>\n<li>Align to other components, allow themselves to be dragged around, make their content scrollable &amp; more</li>\n</ul>\n\n\n<h2 id='components-section-2'>What is a Container?</h2>\n\n<p>Every Component you create has all of the abilities above, but applications are made up of lots of components, usually nested inside one another. Containers are just like Components, but in addition to the capabilities above they can also allow you to render and arrange child Components inside them. Most apps have a single top-level Container called a Viewport, which takes up the entire screen. Inside of this are child components, for example in a mail app the Viewport Container's two children might be a message List and an email preview pane.</p>\n\n<p>Containers give the following extra functionality:</p>\n\n<ul>\n<li>Adding child Components at instantiation and run time</li>\n<li>Removing child Components</li>\n<li>Specifying a <a href=\"#!/guide/layouts\">Layout</a></li>\n</ul>\n\n\n<p>Layouts determine how the child Components should be laid out on the screen. In our mail app example we'd use an HBox layout so that we can pin the email list to the left hand edge of the screen and allow the preview pane to occupy the rest. There are several layouts in Sencha Touch 2, each of which help you achieve your desired application structure, further explained in the <a href=\"#!/guide/layouts\">Layout guide</a>.</p>\n\n<h2 id='components-section-3'>Instantiating Components</h2>\n\n<p>Components are created the same way as all other classes in Sencha Touch - using <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>. Here's how we can create a Panel:</p>\n\n<pre><code>var panel = <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.Panel\" rel=\"Ext.Panel\" class=\"docClass\">Ext.Panel</a>', {\n    html: 'This is my panel'\n});\n</code></pre>\n\n<p>This will create a <a href=\"#!/api/Ext.Panel\" rel=\"Ext.Panel\" class=\"docClass\">Panel</a> instance, configured with some basic HTML content. A Panel is just a simple Component that can render HTML and also contain other items. In this case we've created a Panel instance but it won't show up on the screen yet because items are not rendered immediately after being instantiated. This allows us to create some components and move them around before rendering and laying them out, which is a good deal faster than moving them after rendering.</p>\n\n<p>To show this panel on the screen now we can simply add it to the global Viewport:</p>\n\n<pre><code><a href=\"#!/api/Ext.Viewport-event-add\" rel=\"Ext.Viewport-event-add\" class=\"docClass\">Ext.Viewport.add</a>(panel);\n</code></pre>\n\n<p>Panels are also Containers, which means they can contain other Components, arranged by a layout. Let's revisit the above example now, this time creating a panel with two child Components and a hbox layout:</p>\n\n<pre class='inline-example '><code>var panel = <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.Panel\" rel=\"Ext.Panel\" class=\"docClass\">Ext.Panel</a>', {\n    layout: 'hbox',\n\n    items: [\n        {\n            xtype: 'panel',\n            flex: 1,\n            html: 'Left Panel, 1/3rd of total size',\n            style: 'background-color: #5E99CC;'\n        },\n        {\n            xtype: 'panel',\n            flex: 2,\n            html: 'Right Panel, 2/3rds of total size',\n            style: 'background-color: #759E60;'\n        }\n    ]\n});\n\n<a href=\"#!/api/Ext.Viewport-event-add\" rel=\"Ext.Viewport-event-add\" class=\"docClass\">Ext.Viewport.add</a>(panel);\n</code></pre>\n\n<p>This time we created 3 Panels - the first one is created just as before but the inner two are declared inline using an xtype. Xtype is a convenient way of creating Components without having to go through the process of using <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a> and specifying the full class name, instead you can just provide the xtype for the class inside an object and the framework will create the components for you.</p>\n\n<p>We also specified a layout for the top level panel - in this case hbox, which splits the horizontal width of the parent panel based on the 'flex' of each child. For example, if the parent Panel above is 300px wide then the first child will be flexed to 100px wide and the second to 200px because the first one was given flex: 1 and the second flex: 2.</p>\n\n<h2 id='components-section-4'>Configuring Components</h2>\n\n<p>Whenever you create a new Component you can pass in configuration options. All of the configurations for a given Component are listed in the \"Config options\" section of its class docs page. You can pass in any number of configuration options when you instantiate the Component, and modify any of them at any point later. For example, we can easily modify the <a href=\"#!/api/Ext.Panel-cfg-html\" rel=\"Ext.Panel-cfg-html\" class=\"docClass\">html content</a> of a Panel after creating it:</p>\n\n<pre class='inline-example miniphone'><code>//we can configure the HTML when we instantiate the Component\nvar panel = <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.Panel\" rel=\"Ext.Panel\" class=\"docClass\">Ext.Panel</a>', {\n    fullscreen: true,\n    html: 'This is a Panel'\n});\n\n//we can update the HTML later using the setHtml method:\npanel.setHtml('Some new HTML');\n\n//we can retrieve the current HTML using the getHtml method:\nalert(panel.getHtml()); //alerts \"Some new HTML\"\n</code></pre>\n\n<p>Every config has a getter method and a setter method - these are automatically generated and always follow the same pattern. For example, a config called 'html' will receive getHtml and setHtml methods, a config called defaultType will receive getDefaultType and setDefaultType methods, and so on.</p>\n\n<h2 id='components-section-5'>Using xtype</h2>\n\n<p>xtype is an easy way to create Components without using the full class name. This is especially useful when creating\na <a href=\"#!/api/Ext.Container\" rel=\"Ext.Container\" class=\"docClass\">Container</a> that contains child Components. An xtype is simply a shorthand way of specifying a\nComponent - for example you can use xtype: 'panel' instead of typing out Ext.panel.Panel.</p>\n\n<p>Sample usage:</p>\n\n<pre class='inline-example miniphone'><code><a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.Container\" rel=\"Ext.Container\" class=\"docClass\">Ext.Container</a>', {\n    fullscreen: true,\n    layout: 'fit',\n\n    items: [\n        {\n            xtype: 'panel',\n            html: 'This panel is created by xtype'\n        },\n        {\n            xtype: 'toolbar',\n            title: 'So is the toolbar',\n            dock: 'top'\n        }\n    ]\n});\n</code></pre>\n\n<h3>List of xtypes</h3>\n\n<p>This is the list of all xtypes available in Sencha Touch 2:</p>\n\n<pre>xtype                   Class\n-----------------       ---------------------\nactionsheet             <a href=\"#!/api/Ext.ActionSheet\" rel=\"Ext.ActionSheet\" class=\"docClass\">Ext.ActionSheet</a>\naudio                   <a href=\"#!/api/Ext.Audio\" rel=\"Ext.Audio\" class=\"docClass\">Ext.Audio</a>\nbutton                  <a href=\"#!/api/Ext.Button\" rel=\"Ext.Button\" class=\"docClass\">Ext.Button</a>\ncomponent               <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>\ncontainer               <a href=\"#!/api/Ext.Container\" rel=\"Ext.Container\" class=\"docClass\">Ext.Container</a>\nimage                   <a href=\"#!/api/Ext.Img\" rel=\"Ext.Img\" class=\"docClass\">Ext.Img</a>\nlabel                   <a href=\"#!/api/Ext.Label\" rel=\"Ext.Label\" class=\"docClass\">Ext.Label</a>\nloadmask                <a href=\"#!/api/Ext.LoadMask\" rel=\"Ext.LoadMask\" class=\"docClass\">Ext.LoadMask</a>\nmap                     <a href=\"#!/api/Ext.Map\" rel=\"Ext.Map\" class=\"docClass\">Ext.Map</a>\nmask                    <a href=\"#!/api/Ext.Mask\" rel=\"Ext.Mask\" class=\"docClass\">Ext.Mask</a>\nmedia                   <a href=\"#!/api/Ext.Media\" rel=\"Ext.Media\" class=\"docClass\">Ext.Media</a>\npanel                   <a href=\"#!/api/Ext.Panel\" rel=\"Ext.Panel\" class=\"docClass\">Ext.Panel</a>\nsegmentedbutton         <a href=\"#!/api/Ext.SegmentedButton\" rel=\"Ext.SegmentedButton\" class=\"docClass\">Ext.SegmentedButton</a>\nsheet                   <a href=\"#!/api/Ext.Sheet\" rel=\"Ext.Sheet\" class=\"docClass\">Ext.Sheet</a>\nspacer                  <a href=\"#!/api/Ext.Spacer\" rel=\"Ext.Spacer\" class=\"docClass\">Ext.Spacer</a>\ntitle                   <a href=\"#!/api/Ext.Title\" rel=\"Ext.Title\" class=\"docClass\">Ext.Title</a>\ntitlebar                <a href=\"#!/api/Ext.TitleBar\" rel=\"Ext.TitleBar\" class=\"docClass\">Ext.TitleBar</a>\ntoolbar                 <a href=\"#!/api/Ext.Toolbar\" rel=\"Ext.Toolbar\" class=\"docClass\">Ext.Toolbar</a>\nvideo                   <a href=\"#!/api/Ext.Video\" rel=\"Ext.Video\" class=\"docClass\">Ext.Video</a>\ncarousel                <a href=\"#!/api/Ext.carousel.Carousel\" rel=\"Ext.carousel.Carousel\" class=\"docClass\">Ext.carousel.Carousel</a>\ncarouselindicator       <a href=\"#!/api/Ext.carousel.Indicator\" rel=\"Ext.carousel.Indicator\" class=\"docClass\">Ext.carousel.Indicator</a>\nnavigationview          <a href=\"#!/api/Ext.navigation.View\" rel=\"Ext.navigation.View\" class=\"docClass\">Ext.navigation.View</a>\ndatepicker              <a href=\"#!/api/Ext.picker.Date\" rel=\"Ext.picker.Date\" class=\"docClass\">Ext.picker.Date</a>\npicker                  <a href=\"#!/api/Ext.picker.Picker\" rel=\"Ext.picker.Picker\" class=\"docClass\">Ext.picker.Picker</a>\npickerslot              <a href=\"#!/api/Ext.picker.Slot\" rel=\"Ext.picker.Slot\" class=\"docClass\">Ext.picker.Slot</a>\nslider                  <a href=\"#!/api/Ext.slider.Slider\" rel=\"Ext.slider.Slider\" class=\"docClass\">Ext.slider.Slider</a>\nthumb                   <a href=\"#!/api/Ext.slider.Thumb\" rel=\"Ext.slider.Thumb\" class=\"docClass\">Ext.slider.Thumb</a>\ntabbar                  <a href=\"#!/api/Ext.tab.Bar\" rel=\"Ext.tab.Bar\" class=\"docClass\">Ext.tab.Bar</a>\ntabpanel                <a href=\"#!/api/Ext.tab.Panel\" rel=\"Ext.tab.Panel\" class=\"docClass\">Ext.tab.Panel</a>\ntab                     <a href=\"#!/api/Ext.tab.Tab\" rel=\"Ext.tab.Tab\" class=\"docClass\">Ext.tab.Tab</a>\nviewport                <a href=\"#!/api/Ext.viewport.Default\" rel=\"Ext.viewport.Default\" class=\"docClass\">Ext.viewport.Default</a>\n\nDataView Components\n---------------------------------------------\ndataview                <a href=\"#!/api/Ext.dataview.DataView\" rel=\"Ext.dataview.DataView\" class=\"docClass\">Ext.dataview.DataView</a>\nlist                    <a href=\"#!/api/Ext.dataview.List\" rel=\"Ext.dataview.List\" class=\"docClass\">Ext.dataview.List</a>\nlistitemheader          <a href=\"#!/api/Ext.dataview.ListItemHeader\" rel=\"Ext.dataview.ListItemHeader\" class=\"docClass\">Ext.dataview.ListItemHeader</a>\nnestedlist              <a href=\"#!/api/Ext.dataview.NestedList\" rel=\"Ext.dataview.NestedList\" class=\"docClass\">Ext.dataview.NestedList</a>\ndataitem                <a href=\"#!/api/Ext.dataview.component.DataItem\" rel=\"Ext.dataview.component.DataItem\" class=\"docClass\">Ext.dataview.component.DataItem</a>\n\nForm Components\n---------------------------------------------\ncheckboxfield           <a href=\"#!/api/Ext.field.Checkbox\" rel=\"Ext.field.Checkbox\" class=\"docClass\">Ext.field.Checkbox</a>\ndatepickerfield         <a href=\"#!/api/Ext.field.DatePicker\" rel=\"Ext.field.DatePicker\" class=\"docClass\">Ext.field.DatePicker</a>\nemailfield              <a href=\"#!/api/Ext.field.Email\" rel=\"Ext.field.Email\" class=\"docClass\">Ext.field.Email</a>\nfield                   <a href=\"#!/api/Ext.field.Field\" rel=\"Ext.field.Field\" class=\"docClass\">Ext.field.Field</a>\nhiddenfield             <a href=\"#!/api/Ext.field.Hidden\" rel=\"Ext.field.Hidden\" class=\"docClass\">Ext.field.Hidden</a>\ninput                   <a href=\"#!/api/Ext.field.Input\" rel=\"Ext.field.Input\" class=\"docClass\">Ext.field.Input</a>\nnumberfield             <a href=\"#!/api/Ext.field.Number\" rel=\"Ext.field.Number\" class=\"docClass\">Ext.field.Number</a>\npasswordfield           <a href=\"#!/api/Ext.field.Password\" rel=\"Ext.field.Password\" class=\"docClass\">Ext.field.Password</a>\nradiofield              <a href=\"#!/api/Ext.field.Radio\" rel=\"Ext.field.Radio\" class=\"docClass\">Ext.field.Radio</a>\nsearchfield             <a href=\"#!/api/Ext.field.Search\" rel=\"Ext.field.Search\" class=\"docClass\">Ext.field.Search</a>\nselectfield             <a href=\"#!/api/Ext.field.Select\" rel=\"Ext.field.Select\" class=\"docClass\">Ext.field.Select</a>\nsliderfield             <a href=\"#!/api/Ext.field.Slider\" rel=\"Ext.field.Slider\" class=\"docClass\">Ext.field.Slider</a>\nspinnerfield            <a href=\"#!/api/Ext.field.Spinner\" rel=\"Ext.field.Spinner\" class=\"docClass\">Ext.field.Spinner</a>\ntextfield               <a href=\"#!/api/Ext.field.Text\" rel=\"Ext.field.Text\" class=\"docClass\">Ext.field.Text</a>\ntextareafield           <a href=\"#!/api/Ext.field.TextArea\" rel=\"Ext.field.TextArea\" class=\"docClass\">Ext.field.TextArea</a>\ntextareainput           <a href=\"#!/api/Ext.field.TextAreaInput\" rel=\"Ext.field.TextAreaInput\" class=\"docClass\">Ext.field.TextAreaInput</a>\ntogglefield             <a href=\"#!/api/Ext.field.Toggle\" rel=\"Ext.field.Toggle\" class=\"docClass\">Ext.field.Toggle</a>\nurlfield                <a href=\"#!/api/Ext.field.Url\" rel=\"Ext.field.Url\" class=\"docClass\">Ext.field.Url</a>\nfieldset                <a href=\"#!/api/Ext.form.FieldSet\" rel=\"Ext.form.FieldSet\" class=\"docClass\">Ext.form.FieldSet</a>\nformpanel               <a href=\"#!/api/Ext.form.Panel\" rel=\"Ext.form.Panel\" class=\"docClass\">Ext.form.Panel</a>\n</pre>\n\n\n<h2 id='components-section-6'>Adding Components to Containers</h2>\n\n<p>As we mentioned above, Containers are special Components that can have child Components arranged by a Layout. One of the code samples above showed how to create a Panel with 2 child Panels already defined inside it but it's easy to do this at run time too:</p>\n\n<pre class='inline-example '><code>//this is the Panel we'll be adding below\nvar aboutPanel = <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.Panel\" rel=\"Ext.Panel\" class=\"docClass\">Ext.Panel</a>', {\n    html: 'About this app'\n});\n\n//this is the Panel we'll be adding to\nvar mainPanel = <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.Panel\" rel=\"Ext.Panel\" class=\"docClass\">Ext.Panel</a>', {\n    fullscreen: true,\n\n    layout: 'hbox',\n    defaults: {\n        flex: 1\n    },\n\n    items: {\n        html: 'First Panel',\n        style: 'background-color: #5E99CC;'\n    }\n});\n\n//now we add the first panel inside the second\nmainPanel.add(aboutPanel);\n</code></pre>\n\n<p>Here we created three Panels in total. First we made the aboutPanel, which we might use to tell the user a little about the app. Then we create one called mainPanel, which already contains a third Panel in its <a href=\"#!/api/Ext.Container-cfg-items\" rel=\"Ext.Container-cfg-items\" class=\"docClass\">items</a> configuration, with some dummy text (\"First Panel\"). Finally, we add the first panel to the second by calling the <a href=\"#!/api/Ext.Container-method-add\" rel=\"Ext.Container-method-add\" class=\"docClass\">add</a> method on mainPanel.</p>\n\n<p>In this case we gave our mainPanel another hbox layout, but we also introduced some <a href=\"#!/api/Ext.Container-cfg-defaults\" rel=\"Ext.Container-cfg-defaults\" class=\"docClass\">defaults</a>. These are applied to every item in the Panel, so in this case every child inside mainPanel will be given a flex: 1 configuration. The effect of this is that when we first render the screen only a single child is present inside mainPanel, so that child takes up the full width available to it. Once the mainPanel.add line is called though, the aboutPanel is rendered inside of it and also given a flex of 1, which will cause it and the first panel to both receive half the full width of the mainPanel.</p>\n\n<p>Likewise, it's easy to remove items from a Container:</p>\n\n<pre><code>mainPanel.remove(aboutPanel);\n</code></pre>\n\n<p>After this line is run everything is back to how it was, with the first child panel once again taking up the full width inside mainPanel.</p>\n\n<h2 id='components-section-7'>Showing and Hiding Components</h2>\n\n<p>Every Component in Sencha Touch can be shown or hidden with a simple API. Continuing with the mainPanel example above, here's how we can hide it:</p>\n\n<pre><code>mainPanel.hide();\n</code></pre>\n\n<p>This will hide the mainPanel itself and any child Components inside it. Showing the Component again is predictably easy:</p>\n\n<pre><code>mainPanel.show();\n</code></pre>\n\n<p>Again, this will restore the visibility of mainPanel and any child Components inside it.</p>\n\n<h2 id='components-section-8'>Events</h2>\n\n<p>All Components fire events, which you can listen to and take action on. For example, whenever a <a href=\"#!/api/Ext.field.Text\" rel=\"Ext.field.Text\" class=\"docClass\">Text field</a> is typed into, its 'change' event is fired. You can listen to that event by simply passing a <a href=\"#!/api/Ext.Component-cfg-listeners\" rel=\"Ext.Component-cfg-listeners\" class=\"docClass\">listeners</a> config:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.field.Text\" rel=\"Ext.field.Text\" class=\"docClass\">Ext.form.Text</a>', {\n    label: 'Name',\n    listeners: {\n        change: function(field, newValue, oldValue) {\n            myStore.filter('name', newValue);\n        }\n    }\n});\n</code></pre>\n\n<p>Every time the value of the text field changes, the 'change' event is fired and the function we provided called. In this case we filtered a <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a> by the name typed in to it, but we could have provided any other function there.</p>\n\n<p>Lots of events are fired by Sencha Touch components, allowing you to easily hook into most aspects of an Application's behavior. They can also be specified after the Component has been created.</p>\n\n<p>For example, let's say you have a dashboard that polls for live updates, but you don't want it to poll if the dashboard is not visible, you could simply hook into the dashboard's show and hide events:</p>\n\n<pre><code>dashboard.on({\n    hide: MyApp.stopPolling,\n    show: MyApp.startPolling\n});\n</code></pre>\n\n<p>It's easy to hook behavior like this into your whole app, in this case preserving battery life. Other useful events that are fired are:</p>\n\n<ul>\n<li><a href=\"#!/api/Ext.Component-event-show\" rel=\"Ext.Component-event-show\" class=\"docClass\">show</a></li>\n<li><a href=\"#!/api/Ext.Component-event-hide\" rel=\"Ext.Component-event-hide\" class=\"docClass\">hide</a></li>\n</ul>\n\n\n<p>Each Component has a full list of the events they fire inside their class docs.</p>\n\n<h2 id='components-section-9'>Docking</h2>\n\n<p>Sencha Touch has the ability to dock Components within other Containers. For example we may be using an <a href=\"#!/api/Ext.layout.HBox\" rel=\"Ext.layout.HBox\" class=\"docClass\">hbox layout</a> and want to place a banner to the top - docking gives us an easy way to do this without having to nest Containers inside one another:</p>\n\n<p><p class='screenshot'><img src='guides/components/../layouts/docktop.jpg' alt=''><span></span></p></p>\n\n<p><a href=\"#!/guide/layouts\">The Layout Guide</a> has a full discussion of docking and all of the other layout options.</p>\n\n<h2 id='components-section-10'>Destroying Components</h2>\n\n<p>Because most mobile devices have a limited amount of memory is often a good idea to destroy Components when you know you won't need them any more. It's not the first thing you should be thinking of when you create an app, but it's a good way to optimize the experience your users get when you push the app into production. Destroying a Component is easy:</p>\n\n<pre><code>mainPanel.destroy();\n</code></pre>\n\n<p>This will remove the mainPanel from the DOM and remove any event listeners it has set up on specific DOM elements. It will also destroy any instances that the Panel uses internally, and call destroy on all of its child components. After a Component is destroyed all of its children will also be gone, it will no longer be in the DOM and any references to it will no longer be valid.</p>\n"});
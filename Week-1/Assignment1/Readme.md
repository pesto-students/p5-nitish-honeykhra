# Web Browser

A web browser takes you anywhere on the internet.
It retrieves information from other parts of the web and displays it on your
desktop or mobile device. The information is transferred using the
Hypertext Transfer Protocol, which defines how text, images and video are
transmitted on the web. This information needs to be shared and displayed
in a consistent format so that people using any browser, anywhere in
the world can see the information.

Sadly, not all browser makers choose to interpret the format in the same way.
For users, this means that a website can look and function differently.
Creating consistency between browsers, so that any user can enjoy the
internet, regardless of the browser they choose, is called web standards.

When the web browser fetches data from an internet connected server, it uses
a piece of software called a rendering engine to translate that data into
text and images. This data is written in Hypertext Markup Language (HTML)
and web browsers read this code to create what we see, hear and experience
on the internet.

Hyperlinks allow users to follow a path to other pages or sites on the web.
Every webpage, image and video has its own unique Uniform Resource Locator
(URL), which is also known as a web address. When a browser visits a server
for data, the web address tells the browser where to look for each item that
is described in the html, which then tells the browser where it goes on the
web page.

# The browser's high level structure

## The browser's main components are:

1.The user interface: this includes the address bar, back/forward button,
bookmarking menu, etc. Every part of the browser display except the window
where you see the requested page.

2.The browser engine: marshals actions between the UI and the rendering engine.

3.The rendering engine: responsible for displaying requested content. For
example if the requested content is HTML, the rendering engine parses HTML
and CSS, and displays the parsed content on the screen.

4.Networking: for network calls such as HTTP requests, using different
implementations for different platform behind a platform-independent interface.

5.UI backend: used for drawing basic widgets like combo boxes and windows.
This backend exposes a generic interface that is not platform specific.
Underneath it uses operating system user interface methods.

6.JavaScript interpreter. Used to parse and execute JavaScript code.

7.Data storage. This is a persistence layer. The browser may need to
save all sorts of data locally, such as cookies. Browsers also support
storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

## Browser components

![Browser components](https://i.ibb.co/47jVHx2/browse.jpg)

It is important to note that browsers such as Chrome run multiple
instances of the rendering engine: one for each tab. Each tab runs in
a separate process.

# The rendering engine

The responsibility of the rendering engine is well… Rendering, that is
display of the requested contents on the browser screen.

By default the rendering engine can display HTML and XML documents and images.
It can display other types of data via plug-ins or extension; for example,
displaying PDF documents using a PDF viewer plug-in. However, in this
chapter we will focus on the main use case: displaying HTML and images
that are formatted using CSS.

## Rendering engines

Different browsers use different rendering engines: Internet Explorer uses Trident, Firefox uses Gecko, Safari uses WebKit. Chrome and Opera (from version 15) use Blink, a fork of WebKit.

WebKit is an open source rendering engine which started as an engine for the Linux platform and was modified by Apple to support Mac and Windows. See webkit.org for more details.

## The main flow

The rendering engine will start getting the contents of the requested document from the networking layer. This will usually be done in 8kB chunks.

After that, this is the basic flow of the rendering engine:

### Rendering engine basic flow

![Rendering flow](https://i.ibb.co/yN9pDnJ/rendering-basic-flow.jpg)

The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree.

The render tree contains rectangles with visual attributes like color and dimensions. The rectangles are in the right order to be displayed on the screen.

After the construction of the render tree it goes through a "layout" process. This means giving each node the exact coordinates where it should appear on the screen. The next stage is painting - the render tree will be traversed and each node will be painted using the UI backend layer.

It's important to understand that this is a gradual process. For better user experience, the rendering engine will try to display contents on the screen as soon as possible. It will not wait until all HTML is parsed before starting to build and layout the render tree. Parts of the content will be parsed and displayed, while the process continues with the rest of the contents that keeps coming from the network.

## Main flow examples

### WebKit main flow.

![WebKit main flow](https://i.ibb.co/WF7q5nF/webkit-main-flow.jpg)

Mozilla's Gecko rendering engine main flow.
![Mozilla's Gecko rendering engine main flow](https://i.ibb.co/W0sSphQ/mozilla-geco.jpg)

From figures 3 and 4 you can see that although WebKit and Gecko use slightly different terminology, the flow is basically the same.

Gecko calls the tree of visually formatted elements a "Frame tree". Each element is a frame. WebKit uses the term "Render Tree" and it consists of "Render Objects". WebKit uses the term "layout" for the placing of elements, while Gecko calls it "Reflow". "Attachment" is WebKit's term for connecting DOM nodes and visual information to create the render tree. A minor non-semantic difference is that Gecko has an extra layer between the HTML and the DOM tree. It is called the "content sink" and is a factory for making DOM elements. We will talk about each part of the flow:

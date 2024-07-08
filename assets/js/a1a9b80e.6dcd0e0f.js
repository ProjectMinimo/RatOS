"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3991],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),f=r,d=h["".concat(s,".").concat(f)]||h[f]||c[f]||a;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7832:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var o=n(3117),r=(n(7294),n(3905));const a={},i="Connecting a 4028 fan",l={unversionedId:"guides/4028",id:"guides/4028",title:"Connecting a 4028 fan",description:"4028 server fans are becoming a popular option for part cooling because of their light weight and great pressure and flow rates. In this guide we'll go over how to connect one and use it for part cooling. 4-pin fans usually aren't used in 3d printers, and many boards only provide 2-pin ports, but fear not! There's always a way.",source:"@site/docs/guides/4028.md",sourceDirName:"guides",slug:"/guides/4028",permalink:"/docs/guides/4028",draft:!1,editUrl:"https://github.com/Rat-OS/RatOS/edit/v2.x/site/docs/guides/4028.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Advanced Stepper Configuration",permalink:"/docs/configuration/advanced-stepper-configuration"},next:{title:"Stowable Probes",permalink:"/docs/guides/stowable-probes"}},s={},p=[{value:"Power",id:"power",level:2},{value:"PWM",id:"pwm",level:2},{value:"25KHZ PWM Signal",id:"25khz-pwm-signal",level:3},{value:"100HZ PWM Signal",id:"100hz-pwm-signal",level:3},{value:"Tachometer",id:"tachometer",level:2},{value:"My fan runs at 100% until klipper boots",id:"my-fan-runs-at-100-until-klipper-boots",level:2},{value:"My fan doesn&#39;t shut off at 0%",id:"my-fan-doesnt-shut-off-at-0",level:2},{value:"Bonus: What to look for in a 4028 fan?",id:"bonus-what-to-look-for-in-a-4028-fan",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connecting-a-4028-fan"},"Connecting a 4028 fan"),(0,r.kt)("p",null,"4028 server fans are becoming a popular option for part cooling because of their light weight and great pressure and flow rates. In this guide we'll go over how to connect one and use it for part cooling. 4-pin fans usually aren't used in 3d printers, and many boards only provide 2-pin ports, but fear not! There's always a way."),(0,r.kt)("h2",{id:"power"},"Power"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Please read this carefully. You will fry your fan if you don't supply the correct voltage!")),(0,r.kt)("p",null,"The black and the red pin are for power, you need to connect these to an always on source. Since most of these are 12v, you'll need a 12v source. Boards such as the octopus or the spider come with decent 12v rails on board so you can easily power your 4028 directly from the board via an always-on selectable voltage fan port. Simply connect the red wire to the positive terminal and the black to the negative of the always-on fan port. For other boards without a 12v option, you'll have to use a 12V PSU or a dc/dc converter. If you go that route, be sure to connect the grounds of your 24V PSU and the 12V PSU or dc/dc converter (usually dc/dc converters have the ground pins bridged, so no need to connect the grounds)."),(0,r.kt)("h2",{id:"pwm"},"PWM"),(0,r.kt)("p",null,"On Delta fans the blue wire is the PWM wire, on Sanyo's it's the brown wire. If you're unsure, refer to your fans datasheet. To control the 4028's the PWM wire is fed a 5V PWM signal from the board. An easy way to do this is to hook it up to the negative terminal of the part cooling fan port (refer to your boards wiring diagram). We need to invert the logic of the fan_part_cooling_pin to generate a PWM signal the fan can understand. You can do that with the following piece of configuration in your user overrides section."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"On boards with fan voltage selection (such as the Octopus boards), the voltage doesn't matter. The selector only changes which source the positive pin is connected to. We don't use the positive pin, we use the negative, which is a mosfetted ground connection.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title="printer.cfg"',title:'"printer.cfg"'},"[fan]\npin: !fan_part_cooling_pin\n")),(0,r.kt)("p",null,"The wiring would look like this on an Octopus board."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Octopus 4028 Wiring",src:n(2445).Z,width:"874",height:"452"})),(0,r.kt)("p",null,"Further more, these fans usually want a 25khz PWM signal to function properly, although some work better with 100hz. Try both and test different fans speeds to find out what works best for your particular fan:"),(0,r.kt)("h3",{id:"25khz-pwm-signal"},"25KHZ PWM Signal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title="printer.cfg"',title:'"printer.cfg"'},"[fan]\npin: !fan_part_cooling_pin\ncycle_time: 0.00004\n")),(0,r.kt)("h3",{id:"100hz-pwm-signal"},"100HZ PWM Signal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title="printer.cfg"',title:'"printer.cfg"'},"[fan]\npin: !fan_part_cooling_pin\ncycle_time: 0.01\n")),(0,r.kt)("h2",{id:"tachometer"},"Tachometer"),(0,r.kt)("p",null,"The fourth pin is the tachometer pin, this pin is used to read the RPM of the fan, which, if configured, will be displayed next to the fan speed in Mainsail. You can use any available GPIO on your board for this, if you want, or just leave it disconnected. The following config will enable the tachometer read out:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title="printer.cfg"',title:'"printer.cfg"'},"[fan]\npin: !fan_part_cooling_pin\ncycle_time: 0.00004 # or 0.01\ntachometer_pin: ^PD14 # Made up pin name, look up your boards pinout diagram to get the pin name for the pin you've chosen\ntachometer_poll_interval: 0.0005 # will support up to a 30.000 RPM fan with 2 pulses per rotation.\n")),(0,r.kt)("p",null,"Notice the ",(0,r.kt)("inlineCode",{parentName:"p"},"^")," in front of the pin name, this is a hardware pullup which is generally necessary to read the tachometer signal. For more information on tachometer configuration, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.klipper3d.org/Config_Reference.html?h=tachometer#fan"},"klipper configuration reference")),(0,r.kt)("h2",{id:"my-fan-runs-at-100-until-klipper-boots"},"My fan runs at 100% until klipper boots"),(0,r.kt)("admonition",{title:"Do not do this if you have the tachometer pin connected. It will potentially fry your board.",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"On some fans (verified on Sanyo Denki's) disconnecting the ground pin while 12V is connected to the fan will cause a high voltage on the tachometer pin, this can fry your mcu. Do ",(0,r.kt)("strong",{parentName:"p"},"NOT")," connect the tachometer pin if you do this.")),(0,r.kt)("p",null,"This is a safety feature of server fans, they will always run at 100% until they get a PWM signal. It's a bit annoying for 3d printer use, but there's a way around that. You can use the negative terminal of a spare heater port to only power the fan when the board is booted, by connecting the black wire (gnd) to the negative terminal of the heater port. Since these fans run high amperages, it's important that we use a pwm port backed by a properly rated mosfet, which is why the heater ports are perfect. Wiring would look something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Octopus 4028 Wiring",src:n(5278).Z,width:"1378",height:"655"})),(0,r.kt)("p",null,"Let's say we connect the gnd wire to the second heater of our board which is controlled by the pin ",(0,r.kt)("inlineCode",{parentName:"p"},"PA9")," (made up pin name, look up the correct pin in your boards pin diagram), the configuration would be the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title="printer.cfg"',title:'"printer.cfg"'},"[output_pin 4028_POWER]\npin: PA9\nvalue: 1\nshutdown_value: 0 # turn the fan power off on MCU shutdown.\n")),(0,r.kt)("p",null,"Since Sep 2, 2022 there's now an ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_pin")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"[fan]")," section that does the same thing and on top of that it turns the fan power off if speed is 0, so now you can just do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title="printer.cfg"',title:'"printer.cfg"'},"[fan]\npin: !fan_part_cooling_pin\ncycle_time: 0.01\nenable_pin: PA9\n")),(0,r.kt)("p",null,"That's it! Enjoy using your 4028 for excellent part cooling :)"),(0,r.kt)("h2",{id:"my-fan-doesnt-shut-off-at-0"},"My fan doesn't shut off at 0%"),(0,r.kt)("p",null,"See the instructions for wiring above and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_pin")," like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title="printer.cfg"',title:'"printer.cfg"'},"[fan]\npin: !fan_part_cooling_pin\ncycle_time: 0.01\nenable_pin: PA9\n")),(0,r.kt)("p",null,"That will turn off the fan at 0%."),(0,r.kt)("h2",{id:"bonus-what-to-look-for-in-a-4028-fan"},"Bonus: What to look for in a 4028 fan?"),(0,r.kt)("p",null,'Airflow (common units: cfm, m3/h) isn\'t everything, we want as much pressure we can get to effectively push the high airflow through our ducts, a good fan is balanced between airflow and pressure. Air pressure is usually expressed in inches of water (in. h2o) or pascals, there are online tools to convert between different units, so you can compare the fans before buying, just google "inches of water to pascal" or whatever units you need to convert.'),(0,r.kt)("p",null,"A good performing 4028 fan will have around 25-30 CFM and over 3 inches of water. For example the ",(0,r.kt)("inlineCode",{parentName:"p"},"Delta FFB0412UHN-SM36")," or the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sanyo 9GAX0412P3S001"),". Take a look at the datasheet for the fan and make sure it runs at low PWM levels, you don't always want high output and it's important that the fan you choose supports low speeds as well as high speeds. Generally you want around a maximumum RPM of 20.000-25.000 to keep the rotor light, extremely fast fans such as the twice as powerful ",(0,r.kt)("inlineCode",{parentName:"p"},"Delta PFB0412EN-E")," needs a heavier rotor and is therefore slower to change speeds. Generally the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sanyo 9GAX0412P3S001")," is regarded as the most well rounded 4028 fan currently, but they can be hard to get, so take a look around and see what you can find, there are many options out there."))}c.isMDXComponent=!0},5278:function(e,t,n){t.Z=n.p+"assets/images/4028-octopus-enable-pin-92243e93f9c0c47cde4c8de599750639.png"},2445:function(e,t,n){t.Z=n.p+"assets/images/4028-octopus-e85f43eedd62ff6333b2b5c9dd406a4d.png"}}]);
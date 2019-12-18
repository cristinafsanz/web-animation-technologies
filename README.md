# Web animation tecnhologies

## [A Comparison of Animation Technologies](https://css-tricks.com/comparison-animation-technologies/)

- Native Animation
    - CSS
        - [transform and opacity](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)
        - Animation hooks as `onAnimationEnd`
        - Beyond chaining three animations in a row, move to JavaScript.
    - requestAnimationFrame
        - Native method on the window object in JavaScript
        - It figures out what the appropriate frame rate is for your animation
    - Canvas
        -  It offers a visual space scripting, in which you can create complex drawings and interaction
        - Canvas is really nice with interaction
        - It’s difficult to make accessible
        - Unintuitive to make responsive
    - WebGL
        - Amazing visual effects
        - Hardware-accelerated
        - Tougher to learn than the other native animations
        - Hard to make responsive

- External Libraries
    - GreenSock (GSAP)
        - Good performance
        - You have to pay for licensing if you're re-selling your product to multiple users
    - Three.js

## Courses

- Create modern CSS animations (15 hours): https://openclassrooms.com/en/courses/5625816-create-modern-css-animations
- HTML5 Canvas (2 weeks): https://www.udacity.com/course/html5-canvas--ud292
- Browser Rendering optimization (requestAnimationFrame) (1 month): https://www.udacity.com/course/browser-rendering-optimization--ud860
- Getting started with GSAP 3: https://greensock.com/get-started/
- Course Interactive 3D Graphics (Three.js) (2 months): https://www.udacity.com/course/interactive-3d-graphics--cs291

## GSAP 3
- Getting started with GSAP 3: https://greensock.com/get-started/
- New features of GSAP 3: https://tympanus.net/codrops/2019/11/14/the-new-features-of-gsap-3/
- Vue.js and GSAP: https://blog.usejournal.com/vue-js-gsap-animations-26fc6b1c3c5a

### Project Vue and GSAP 3

- [Demo](https://cristinafsanz.github.io/web-animation-technologies/gsap/vue-gsap-3/dist/#/)

- Create Vue Project

    ```
    vue create vue-gsap-3
    ```

    - Manually select features: Babel, router, Linter

- Run project

    ```
    cd vue-gsap-3
    npm run server
    ```

- Simplify `App.js`

- Change `Home.vue` to have this code:

    ```
    <template>
        <div ref="box" class="box"></div>
    </template>

    <style>
    .box {
        height: 60px;
        width: 60px;
        background: red;
    }
    </style>
    ```

- Install `GSAP`:

    ```
    npm install gsap
    ```

- Import `gsap`:

    ```
    <template>
        <div class="box"></div>
    </template>

    <script>
    /* eslint-disable new-cap */
    import gsap from 'gsap'
    export default {
        mounted () {
            const timeline = new gsap.timeline()

            timeline.to('.box', {
                duration: 2,
                x: 200,
                rotation: 90,
                backgroundColor: '#560563',
                ease: 'back'
            })
        }
    }
    </script>

    <style>
    .box {
        height: 60px;
        width: 60px;
        background: red;
    }
    </style>
    ```

- The timeline instance exposes a to method, with which we pass 2 arguments:
    - Arg 1: The element to animate
    - Arg 2: An object describing the animation to perform

- The html when you inspect the element is:

    ```
    <div class="box" style="background-color: rgb(86, 5, 99); transform: translate(200px, 0px) rotate(90deg);"></div>
    ```

- Complete example in [Home.vue](https://github.com/cristinafsanz/web-animation-technologies/blob/master/gsap/vue-gsap-3/src/views/Home.vue)

- Greensock Ease visualizer: https://greensock.com/docs/v3/Eases

- Deploy project:

    - Create file `vue.config.js` in root Vue project:

        ```
        module.exports = {
            publicPath: process.env.NODE_ENV === 'production' ? '/web-animation-technologies/gsap/vue-gsap-3/' : '/'
        }
        ```

    - Generate dist files:

        ```
        npm run build
        ```

    - Add dist files to git (remove `dist/` from `.gitignore`) and push to master

    - Enable GitHub Pages in settings

    - Project deployed in https://cristinafsanz.github.io/web-animation-technologies/gsap/vue-gsap-3/dist/#/

### Project Vue and WinWheel (internally GSAP)

- [JavaScript WinWheel](https://github.com/zarocknz/javascript-winwheel)

- [Demo](https://cristinafsanz.github.io/web-animation-technologies/gsap/vue-gsap-3/dist/#/javascript-winwheel)

    - Imported and changed a little `Winwheel.js`.



import { BaseCustomWebComponentConstructorAppendLazyReady, LazyLoader, css, html } from '@node-projects/base-custom-webcomponent';

export class SweetHome3dWebcomponent extends BaseCustomWebComponentConstructorAppendLazyReady {

    public static override style = css`
    :host {
        font: inherit;
        position: relative;
        display: inline-block;
    }
    canvas {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: absolute;
    }
`

    public static override template = html`
    <canvas id="viewerCanvas" class="viewerComponent" width="800" height="600"
        style="background-color: #CCCCCC; border: 1px solid gray; outline:none; touch-action: none" tabIndex="1"></canvas>
    `
    public static readonly is = 'node-projects-sweet-home-3d';

    public static properties = {
        url: String,
        level: String,
        camera: String
    }

    private _viewerCanvas: HTMLCanvasElement;

    public url: string;
    public level: string;
    public camera: string;

    constructor() {
        super();
        this._restoreCachedInititalValues()

        this._viewerCanvas = this._getDomElement<HTMLCanvasElement>('viewerCanvas');
    }

    async ready() {
        this._parseAttributesToProperties();

        let prefix = '../lib/sweethome3djsviewer/'
        let jsFiles = [
            'big.min.js',
            'gl-matrix-min.js',
            'jszip.min.js',
            'core.min.js',
            'geom.min.js',
            'stroke.min.js',
            'batik-svgpathparser.min.js',
            'jsXmlSaxParser.min.js',
            'triangulator.min.js',
            'viewmodel.min.js',
            'viewhome.min.js'];
        const importFiles = jsFiles.map(x => new URL(prefix + 'lib/' + x, import.meta.url).toString());
        for (const f of importFiles)
            await LazyLoader.LoadJavascript(f);
        //await LazyLoader.LoadJavascripts(...importFiles);

        const options = {
            roundsPerMinute: 0,                    // Rotation speed of the animation launched once home is loaded in rounds per minute, no animation if missing or equal to 0 
            navigationPanel: "none",               // Displayed navigation arrows, "none" or "default" for default one or an HTML string containing elements with data-simulated-key 
            // attribute set "UP", "DOWN", "LEFT", "RIGHT"... to replace the default navigation panel, "none" if missing 
            // aerialViewButtonId: "aerialView",      // Id of the aerial view radio button, radio buttons hidden if missing  
            // virtualVisitButtonId: "virtualVisit",  // Id of the aerial view radio button, radio buttons hidden if missing  
            // levelsAndCamerasListId: "levelsAndCameras",          // Id of the levels and cameras select component, hidden if missing
            level: this.level,                                 // Uncomment to select the displayed level, default level if missing */
            /* selectableLevels: ["Ground floor", "Roof"], */       // Uncomment to choose the list of displayed levels, no select component if empty array */
            camera: this.camera,                       // Uncomment to select a camera, default camera if missing */
            /* selectableCameras: ["Exterior view", "Kitchen"], */  // Uncomment to choose the list of displayed cameras, no camera if missing */
            activateCameraSwitchKey: true                        // Switch between top view / virtual visit with space bar if not false or missing */
        };

        //@ts-ignore
        viewHome(this._viewerCanvas,    // Id of the canvas
            this.url,           // URL or relative URL of the home to display 
            onerror,           // Callback called in case of error
            (part, info, percentage) => { },     // Callback called while loading 
            options);
    }


}

customElements.define(SweetHome3dWebcomponent.is, SweetHome3dWebcomponent);
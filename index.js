var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
/**
 * @name Snips
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { Snips } from '@ionic-native/snips';
 *
 *
 * constructor(private snips: Snips) { }
 *
 * ...
 *
 * let config: DialogflowConfiguration;
 * this.dialogflow.init(config)
 *   .then(() => console.log('Initialized'))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 *
 * @interfaces
 * DetectIntentResponse
 *
 * @interfaces
 * StreamingDetectIntentResponse
 */
var Snips = (function (_super) {
    __extends(Snips, _super);
    function Snips() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Starts listening to microphone input.
     * @return {Observable<StreamingDetectIntentResponse>} Returns a observable containing streaming detect intent response.
     */
    /**
       * Starts listening to microphone input.
       * @return {Observable<StreamingDetectIntentResponse>} Returns a observable containing streaming detect intent response.
       */
    Snips.prototype.start = /**
       * Starts listening to microphone input.
       * @return {Observable<StreamingDetectIntentResponse>} Returns a observable containing streaming detect intent response.
       */
    function () {
        return;
    };
    /**
     * Stops listening to microphone input.
     */
    /**
       * Stops listening to microphone input.
       */
    Snips.prototype.stop = /**
       * Stops listening to microphone input.
       */
    function () {
        return;
    };
    /**
     * Pauses listening to microphone input.
     */
    /**
       * Pauses listening to microphone input.
       */
    Snips.prototype.pause = /**
       * Pauses listening to microphone input.
       */
    function () {
        return;
    };
    /**
     * Resumes listening to microphone input.
     */
    /**
       * Resumes listening to microphone input.
       */
    Snips.prototype.resume = /**
       * Resumes listening to microphone input.
       */
    function () {
        return;
    };
    Snips.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova({
            observable: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], Snips.prototype, "start", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Snips.prototype, "stop", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Snips.prototype, "pause", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Snips.prototype, "resume", null);
    /**
     * @name Snips
     * @description
     * This plugin does something
     *
     * @usage
     * ```typescript
     * import { Snips } from '@ionic-native/snips';
     *
     *
     * constructor(private snips: Snips) { }
     *
     * ...
     *
     * let config: DialogflowConfiguration;
     * this.dialogflow.init(config)
     *   .then(() => console.log('Initialized'))
     *   .catch((error: any) => console.error(error));
     *
     * ```
     *
     * @interfaces
     * DetectIntentResponse
     *
     * @interfaces
     * StreamingDetectIntentResponse
     */
    Snips = __decorate([
        Plugin({
            pluginName: 'Snips',
            plugin: 'cordova-plugin-snips',
            // npm package name, example: cordova-plugin-camera
            pluginRef: 'cordova.plugins.Snips',
            // the variable reference to call the plugin, example: navigator.geolocation
            repo: 'https://betacut@bitbucket.org/betacut/cordova-plugin-snips.git',
            // the github repository URL for the plugin
            install: '',
            // OPTIONAL install command, in case the plugin requires variables
            installVariables: [],
            // OPTIONAL the plugin requires variables
            platforms: ['iOS'] // Array of platforms supported, example: ['Android', 'iOS']
        })
    ], Snips);
    return Snips;
}(IonicNativePlugin));
export { Snips };
//# sourceMappingURL=index.js.map
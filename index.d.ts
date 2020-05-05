import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export interface SnipsResponse {
    hotword: boolean;
}
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
export declare class Snips extends IonicNativePlugin {
    /**
     * Starts listening to microphone input.
     * @return {Observable<StreamingDetectIntentResponse>} Returns a observable containing streaming detect intent response.
     */
    start(): Observable<SnipsResponse>;
    /**
     * Stops listening to microphone input.
     */
    stop(): void;
    /**
     * Pauses listening to microphone input.
     */
    pause(): void;
    /**
     * Resumes listening to microphone input.
     */
    resume(): void;
}

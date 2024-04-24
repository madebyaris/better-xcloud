// Get type of an array's element
type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

interface Window {
    AppInterface: any;
    BX_FLAGS?: BxFlags;
    BX_CE: (elmName: string, props: {[index: string]: any}={}) => HTMLElement;
    BX_EXPOSED: any;

    BX_VIBRATION_INTENSITY: number;
    BX_ENABLE_CONTROLLER_VIBRATION: boolean;
    BX_ENABLE_DEVICE_VIBRATION: boolean;

    BX_REMOTE_PLAY_CONFIG: BxStates.remotePlay.config;
}

interface NavigatorBattery extends Navigator {
    getBattery: () => Promise<{
        charging: boolean,
        level: float,
    }>,
}

type BxStates = {
    isPlaying: boolean;
    appContext: any | null;
    serverRegions: any;
    hasTouchSupport: boolean;

    currentStream: Partial<{
        titleId: string;
        xboxTitleId: string;
        productId: string;

        $video: HTMLVideoElement | null;
        $screenshotCanvas: HTMLCanvasElement | null;

        peerConnection: RTCPeerConnection;
        audioContext: AudioContext | null;
        audioGainNode: GainNode | null;
    }>;

    remotePlay: Partial<{
        isPlaying: boolean;
        server: string;
        config: {
            serverId: string;
        };
    }>;
}

type DualEnum = {[index: string]: number} & {[index: number]: string};

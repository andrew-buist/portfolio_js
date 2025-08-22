import React, { Component } from "react";
import Draggable from "react-draggable";
import { useZIndex } from '../components/ZIndexContext'

interface Props {
    id: string;
    children: React.ReactNode;
};

export default class DraggableCustom extends Component<Props> {

    constructor(props: any) {
        super(props);
    }

    public id = this.props.id
    public children = this.props.id

    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
    }

    render() {
        const { zIndexMap, bringToFront } = useZIndex();
        const z = zIndexMap[this.id] ?? 0;
        const childRef = React.useRef<HTMLDivElement>(null)
        return (
            <Draggable
                nodeRef={childRef}
                axis={"x"}
                bounds={"parent"}
            >
                <div
                    ref={childRef}
                    onMouseDownCapture={() => { bringToFront(this.id) }}
                    style={{ zIndex: z, position: 'absolute', cursor: 'default' }}
                    className="inline-block max-w-100">
                    {this.children}
                </div>
            </Draggable>
        )
    }

    private onWindowResize = () => {
        this.fakeDrag();
    };

    private fakeDrag = () => {
        const clickEvent = new Event('click', { bubbles: true })
        dispatchEvent(clickEvent);
    }
}
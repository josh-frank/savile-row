export default function Handle( { command, parsedCommand } ) {

    return <g>
        <circle
            cx={ parsedCommand.point[ 0 ] }
            cy={ parsedCommand.point[ 1 ] }
            r="2"
            fill="red"
        />
        { parsedCommand.startHandle && <>
            <circle
                cx={ parsedCommand.startHandle[ 2 ] }
                cy={ parsedCommand.startHandle[ 3 ] }
                r="2"
                fill="red"
            />
            <line
                x1={ parsedCommand.startHandle[ 0 ] }
                y1={ parsedCommand.startHandle[ 1 ] }
                x2={ parsedCommand.startHandle[ 2 ] }
                y2={ parsedCommand.startHandle[ 3 ] }
                stroke="red"
            />
        </> }
        { parsedCommand.endHandle && <>
            <circle
                cx={ parsedCommand.endHandle[ 2 ] }
                cy={ parsedCommand.endHandle[ 3 ] }
                r="2"
                fill="red"
            />
            <line
                x1={ parsedCommand.endHandle[ 0 ] }
                y1={ parsedCommand.endHandle[ 1 ] }
                x2={ parsedCommand.endHandle[ 2 ] }
                y2={ parsedCommand.endHandle[ 3 ] }
                stroke="red"
            />
        </> }
    </g>;

}
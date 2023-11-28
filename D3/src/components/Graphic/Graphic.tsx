import * as d3 from "d3";
import { useEffect, useRef } from "react";

type GraphicProps = {
    data: number[];
} & Partial<{
    width: number;
    height: number;
    marginTop: number;
    marginRight: number;
    marginBottom: number;
    marginLeft: number;
}>
export const Graphic = ({ data,
    width = 640,
    height = 400,
    marginTop = 20,
    marginRight = 20,
    marginBottom = 20,
    marginLeft = 20 }: GraphicProps) => {


    const ref = useRef();

    const updateGraphic = () => {
        const svg = d3.select("#viz")
            .attr("height", height)
            .attr("width", width);
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("height", (d) => d * 5)
            .attr("width", "50")
            .attr("fill", "pink")
            .attr("x", (d, i) => 60 * i)
            .attr("y", (d) => 300 - d * 5);

        // svg.selectAll("rect")
        //     .data(data)
        //     .enter()
        //     .append("circle")
        //     .attr("cx", (d, i) => {return (d*6)+(i*30)})
        //     .attr("cy", "100")
        //     .attr("r", (d) => d * 2)
    }

    useEffect(() => {
        updateGraphic()
    }, [])

    return (
        <svg id="viz" ref={ref.current} />

    )
}
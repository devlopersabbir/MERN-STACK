import { Box, Text } from "@chakra-ui/react";
import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { data } from "./ChartData/Data";

const Charts = () => {
  return (
    <Box w={"60%"} shadow={"lg"} maxW={"full"}>
      <Text py={5} color={"gray.500"} px={4} fontWeight={"semibold"}>
        Last 6 month (Reveneue)
      </Text>
      <ResponsiveContainer width="100%" aspect={3 / 2}>
        <AreaChart
          width={"100%"}
          height={"100%"}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Charts;

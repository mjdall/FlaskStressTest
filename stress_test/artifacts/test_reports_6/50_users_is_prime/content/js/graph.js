/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 3298.0, "series": [{"data": [[0.0, 2.0], [0.1, 2.0], [0.2, 3.0], [0.3, 3.0], [0.4, 4.0], [0.5, 5.0], [0.6, 5.0], [0.7, 6.0], [0.8, 6.0], [0.9, 7.0], [1.0, 8.0], [1.1, 30.0], [1.2, 32.0], [1.3, 42.0], [1.4, 48.0], [1.5, 54.0], [1.6, 89.0], [1.7, 91.0], [1.8, 92.0], [1.9, 93.0], [2.0, 94.0], [2.1, 95.0], [2.2, 96.0], [2.3, 97.0], [2.4, 97.0], [2.5, 97.0], [2.6, 98.0], [2.7, 99.0], [2.8, 99.0], [2.9, 100.0], [3.0, 100.0], [3.1, 101.0], [3.2, 102.0], [3.3, 102.0], [3.4, 102.0], [3.5, 105.0], [3.6, 106.0], [3.7, 108.0], [3.8, 111.0], [3.9, 113.0], [4.0, 143.0], [4.1, 146.0], [4.2, 148.0], [4.3, 192.0], [4.4, 192.0], [4.5, 199.0], [4.6, 292.0], [4.7, 299.0], [4.8, 393.0], [4.9, 397.0], [5.0, 405.0], [5.1, 407.0], [5.2, 409.0], [5.3, 441.0], [5.4, 448.0], [5.5, 489.0], [5.6, 491.0], [5.7, 493.0], [5.8, 493.0], [5.9, 495.0], [6.0, 496.0], [6.1, 496.0], [6.2, 498.0], [6.3, 499.0], [6.4, 542.0], [6.5, 546.0], [6.6, 583.0], [6.7, 652.0], [6.8, 689.0], [6.9, 696.0], [7.0, 696.0], [7.1, 700.0], [7.2, 709.0], [7.3, 709.0], [7.4, 741.0], [7.5, 788.0], [7.6, 793.0], [7.7, 796.0], [7.8, 798.0], [7.9, 800.0], [8.0, 806.0], [8.1, 841.0], [8.2, 845.0], [8.3, 851.0], [8.4, 861.0], [8.5, 891.0], [8.6, 892.0], [8.7, 894.0], [8.8, 898.0], [8.9, 900.0], [9.0, 902.0], [9.1, 912.0], [9.2, 941.0], [9.3, 996.0], [9.4, 998.0], [9.5, 999.0], [9.6, 1002.0], [9.7, 1002.0], [9.8, 1003.0], [9.9, 1004.0], [10.0, 1006.0], [10.1, 1006.0], [10.2, 1007.0], [10.3, 1008.0], [10.4, 1043.0], [10.5, 1043.0], [10.6, 1089.0], [10.7, 1094.0], [10.8, 1094.0], [10.9, 1096.0], [11.0, 1096.0], [11.1, 1096.0], [11.2, 1097.0], [11.3, 1097.0], [11.4, 1098.0], [11.5, 1099.0], [11.6, 1099.0], [11.7, 1101.0], [11.8, 1101.0], [11.9, 1104.0], [12.0, 1105.0], [12.1, 1106.0], [12.2, 1106.0], [12.3, 1141.0], [12.4, 1142.0], [12.5, 1195.0], [12.6, 1196.0], [12.7, 1198.0], [12.8, 1200.0], [12.9, 1201.0], [13.0, 1202.0], [13.1, 1203.0], [13.2, 1203.0], [13.3, 1294.0], [13.4, 1295.0], [13.5, 1295.0], [13.6, 1296.0], [13.7, 1296.0], [13.8, 1298.0], [13.9, 1299.0], [14.0, 1299.0], [14.1, 1300.0], [14.2, 1301.0], [14.3, 1301.0], [14.4, 1302.0], [14.5, 1303.0], [14.6, 1303.0], [14.7, 1303.0], [14.8, 1304.0], [14.9, 1305.0], [15.0, 1305.0], [15.1, 1306.0], [15.2, 1306.0], [15.3, 1307.0], [15.4, 1309.0], [15.5, 1350.0], [15.6, 1391.0], [15.7, 1392.0], [15.8, 1395.0], [15.9, 1396.0], [16.0, 1396.0], [16.1, 1396.0], [16.2, 1397.0], [16.3, 1397.0], [16.4, 1398.0], [16.5, 1398.0], [16.6, 1398.0], [16.7, 1399.0], [16.8, 1399.0], [16.9, 1399.0], [17.0, 1400.0], [17.1, 1400.0], [17.2, 1400.0], [17.3, 1401.0], [17.4, 1402.0], [17.5, 1402.0], [17.6, 1402.0], [17.7, 1402.0], [17.8, 1403.0], [17.9, 1403.0], [18.0, 1403.0], [18.1, 1410.0], [18.2, 1411.0], [18.3, 1444.0], [18.4, 1491.0], [18.5, 1493.0], [18.6, 1493.0], [18.7, 1494.0], [18.8, 1494.0], [18.9, 1496.0], [19.0, 1496.0], [19.1, 1497.0], [19.2, 1497.0], [19.3, 1497.0], [19.4, 1498.0], [19.5, 1498.0], [19.6, 1498.0], [19.7, 1498.0], [19.8, 1498.0], [19.9, 1500.0], [20.0, 1500.0], [20.1, 1501.0], [20.2, 1502.0], [20.3, 1502.0], [20.4, 1503.0], [20.5, 1505.0], [20.6, 1505.0], [20.7, 1507.0], [20.8, 1594.0], [20.9, 1595.0], [21.0, 1596.0], [21.1, 1597.0], [21.2, 1598.0], [21.3, 1598.0], [21.4, 1599.0], [21.5, 1600.0], [21.6, 1600.0], [21.7, 1600.0], [21.8, 1600.0], [21.9, 1600.0], [22.0, 1601.0], [22.1, 1602.0], [22.2, 1602.0], [22.3, 1603.0], [22.4, 1603.0], [22.5, 1604.0], [22.6, 1606.0], [22.7, 1607.0], [22.8, 1613.0], [22.9, 1693.0], [23.0, 1693.0], [23.1, 1695.0], [23.2, 1696.0], [23.3, 1696.0], [23.4, 1698.0], [23.5, 1698.0], [23.6, 1698.0], [23.7, 1699.0], [23.8, 1699.0], [23.9, 1699.0], [24.0, 1700.0], [24.1, 1700.0], [24.2, 1700.0], [24.3, 1701.0], [24.4, 1701.0], [24.5, 1702.0], [24.6, 1702.0], [24.7, 1702.0], [24.8, 1703.0], [24.9, 1703.0], [25.0, 1703.0], [25.1, 1704.0], [25.2, 1707.0], [25.3, 1707.0], [25.4, 1707.0], [25.5, 1707.0], [25.6, 1708.0], [25.7, 1709.0], [25.8, 1746.0], [25.9, 1747.0], [26.0, 1794.0], [26.1, 1794.0], [26.2, 1795.0], [26.3, 1797.0], [26.4, 1797.0], [26.5, 1798.0], [26.6, 1798.0], [26.7, 1799.0], [26.8, 1799.0], [26.9, 1799.0], [27.0, 1799.0], [27.1, 1800.0], [27.2, 1800.0], [27.3, 1800.0], [27.4, 1800.0], [27.5, 1801.0], [27.6, 1802.0], [27.7, 1803.0], [27.8, 1803.0], [27.9, 1804.0], [28.0, 1804.0], [28.1, 1804.0], [28.2, 1805.0], [28.3, 1805.0], [28.4, 1806.0], [28.5, 1806.0], [28.6, 1809.0], [28.7, 1842.0], [28.8, 1842.0], [28.9, 1842.0], [29.0, 1845.0], [29.1, 1888.0], [29.2, 1890.0], [29.3, 1891.0], [29.4, 1893.0], [29.5, 1895.0], [29.6, 1896.0], [29.7, 1896.0], [29.8, 1897.0], [29.9, 1897.0], [30.0, 1898.0], [30.1, 1898.0], [30.2, 1898.0], [30.3, 1898.0], [30.4, 1899.0], [30.5, 1899.0], [30.6, 1899.0], [30.7, 1900.0], [30.8, 1900.0], [30.9, 1900.0], [31.0, 1900.0], [31.1, 1900.0], [31.2, 1901.0], [31.3, 1901.0], [31.4, 1901.0], [31.5, 1901.0], [31.6, 1902.0], [31.7, 1903.0], [31.8, 1904.0], [31.9, 1904.0], [32.0, 1905.0], [32.1, 1906.0], [32.2, 1906.0], [32.3, 1906.0], [32.4, 1907.0], [32.5, 1907.0], [32.6, 1908.0], [32.7, 1943.0], [32.8, 1944.0], [32.9, 1946.0], [33.0, 1990.0], [33.1, 1992.0], [33.2, 1993.0], [33.3, 1994.0], [33.4, 1994.0], [33.5, 1995.0], [33.6, 1996.0], [33.7, 1996.0], [33.8, 1997.0], [33.9, 1997.0], [34.0, 1998.0], [34.1, 1998.0], [34.2, 1999.0], [34.3, 1999.0], [34.4, 1999.0], [34.5, 2000.0], [34.6, 2000.0], [34.7, 2000.0], [34.8, 2000.0], [34.9, 2001.0], [35.0, 2002.0], [35.1, 2003.0], [35.2, 2003.0], [35.3, 2004.0], [35.4, 2004.0], [35.5, 2004.0], [35.6, 2004.0], [35.7, 2005.0], [35.8, 2011.0], [35.9, 2047.0], [36.0, 2089.0], [36.1, 2093.0], [36.2, 2095.0], [36.3, 2095.0], [36.4, 2096.0], [36.5, 2097.0], [36.6, 2097.0], [36.7, 2098.0], [36.8, 2099.0], [36.9, 2100.0], [37.0, 2100.0], [37.1, 2100.0], [37.2, 2100.0], [37.3, 2100.0], [37.4, 2100.0], [37.5, 2101.0], [37.6, 2101.0], [37.7, 2101.0], [37.8, 2102.0], [37.9, 2102.0], [38.0, 2104.0], [38.1, 2110.0], [38.2, 2193.0], [38.3, 2194.0], [38.4, 2194.0], [38.5, 2195.0], [38.6, 2196.0], [38.7, 2196.0], [38.8, 2196.0], [38.9, 2197.0], [39.0, 2197.0], [39.1, 2197.0], [39.2, 2197.0], [39.3, 2198.0], [39.4, 2198.0], [39.5, 2198.0], [39.6, 2198.0], [39.7, 2199.0], [39.8, 2199.0], [39.9, 2200.0], [40.0, 2200.0], [40.1, 2201.0], [40.2, 2201.0], [40.3, 2203.0], [40.4, 2203.0], [40.5, 2204.0], [40.6, 2204.0], [40.7, 2205.0], [40.8, 2206.0], [40.9, 2207.0], [41.0, 2283.0], [41.1, 2289.0], [41.2, 2293.0], [41.3, 2293.0], [41.4, 2293.0], [41.5, 2296.0], [41.6, 2297.0], [41.7, 2298.0], [41.8, 2298.0], [41.9, 2299.0], [42.0, 2300.0], [42.1, 2300.0], [42.2, 2300.0], [42.3, 2300.0], [42.4, 2300.0], [42.5, 2301.0], [42.6, 2301.0], [42.7, 2301.0], [42.8, 2302.0], [42.9, 2302.0], [43.0, 2302.0], [43.1, 2303.0], [43.2, 2303.0], [43.3, 2304.0], [43.4, 2305.0], [43.5, 2305.0], [43.6, 2307.0], [43.7, 2308.0], [43.8, 2367.0], [43.9, 2391.0], [44.0, 2392.0], [44.1, 2394.0], [44.2, 2394.0], [44.3, 2394.0], [44.4, 2395.0], [44.5, 2395.0], [44.6, 2396.0], [44.7, 2397.0], [44.8, 2397.0], [44.9, 2397.0], [45.0, 2398.0], [45.1, 2398.0], [45.2, 2398.0], [45.3, 2398.0], [45.4, 2398.0], [45.5, 2398.0], [45.6, 2398.0], [45.7, 2398.0], [45.8, 2398.0], [45.9, 2399.0], [46.0, 2399.0], [46.1, 2399.0], [46.2, 2399.0], [46.3, 2399.0], [46.4, 2399.0], [46.5, 2400.0], [46.6, 2400.0], [46.7, 2400.0], [46.8, 2400.0], [46.9, 2400.0], [47.0, 2401.0], [47.1, 2401.0], [47.2, 2401.0], [47.3, 2401.0], [47.4, 2401.0], [47.5, 2401.0], [47.6, 2401.0], [47.7, 2402.0], [47.8, 2402.0], [47.9, 2402.0], [48.0, 2402.0], [48.1, 2402.0], [48.2, 2402.0], [48.3, 2402.0], [48.4, 2403.0], [48.5, 2403.0], [48.6, 2403.0], [48.7, 2403.0], [48.8, 2403.0], [48.9, 2403.0], [49.0, 2404.0], [49.1, 2404.0], [49.2, 2404.0], [49.3, 2405.0], [49.4, 2405.0], [49.5, 2406.0], [49.6, 2406.0], [49.7, 2407.0], [49.8, 2408.0], [49.9, 2409.0], [50.0, 2421.0], [50.1, 2478.0], [50.2, 2489.0], [50.3, 2491.0], [50.4, 2492.0], [50.5, 2492.0], [50.6, 2493.0], [50.7, 2493.0], [50.8, 2493.0], [50.9, 2494.0], [51.0, 2495.0], [51.1, 2495.0], [51.2, 2495.0], [51.3, 2495.0], [51.4, 2495.0], [51.5, 2496.0], [51.6, 2496.0], [51.7, 2496.0], [51.8, 2496.0], [51.9, 2496.0], [52.0, 2496.0], [52.1, 2496.0], [52.2, 2496.0], [52.3, 2497.0], [52.4, 2497.0], [52.5, 2497.0], [52.6, 2497.0], [52.7, 2497.0], [52.8, 2498.0], [52.9, 2498.0], [53.0, 2498.0], [53.1, 2499.0], [53.2, 2499.0], [53.3, 2499.0], [53.4, 2499.0], [53.5, 2499.0], [53.6, 2499.0], [53.7, 2499.0], [53.8, 2499.0], [53.9, 2499.0], [54.0, 2499.0], [54.1, 2500.0], [54.2, 2500.0], [54.3, 2500.0], [54.4, 2500.0], [54.5, 2500.0], [54.6, 2500.0], [54.7, 2500.0], [54.8, 2500.0], [54.9, 2500.0], [55.0, 2501.0], [55.1, 2501.0], [55.2, 2501.0], [55.3, 2501.0], [55.4, 2501.0], [55.5, 2502.0], [55.6, 2502.0], [55.7, 2502.0], [55.8, 2502.0], [55.9, 2502.0], [56.0, 2503.0], [56.1, 2503.0], [56.2, 2503.0], [56.3, 2503.0], [56.4, 2503.0], [56.5, 2504.0], [56.6, 2504.0], [56.7, 2504.0], [56.8, 2504.0], [56.9, 2504.0], [57.0, 2505.0], [57.1, 2505.0], [57.2, 2505.0], [57.3, 2506.0], [57.4, 2506.0], [57.5, 2506.0], [57.6, 2506.0], [57.7, 2506.0], [57.8, 2507.0], [57.9, 2508.0], [58.0, 2508.0], [58.1, 2508.0], [58.2, 2531.0], [58.3, 2568.0], [58.4, 2590.0], [58.5, 2591.0], [58.6, 2592.0], [58.7, 2592.0], [58.8, 2592.0], [58.9, 2592.0], [59.0, 2593.0], [59.1, 2593.0], [59.2, 2594.0], [59.3, 2594.0], [59.4, 2594.0], [59.5, 2595.0], [59.6, 2595.0], [59.7, 2595.0], [59.8, 2595.0], [59.9, 2596.0], [60.0, 2596.0], [60.1, 2596.0], [60.2, 2596.0], [60.3, 2596.0], [60.4, 2596.0], [60.5, 2597.0], [60.6, 2597.0], [60.7, 2597.0], [60.8, 2597.0], [60.9, 2597.0], [61.0, 2597.0], [61.1, 2597.0], [61.2, 2597.0], [61.3, 2598.0], [61.4, 2598.0], [61.5, 2598.0], [61.6, 2598.0], [61.7, 2598.0], [61.8, 2598.0], [61.9, 2598.0], [62.0, 2598.0], [62.1, 2599.0], [62.2, 2599.0], [62.3, 2599.0], [62.4, 2599.0], [62.5, 2599.0], [62.6, 2599.0], [62.7, 2599.0], [62.8, 2599.0], [62.9, 2599.0], [63.0, 2599.0], [63.1, 2599.0], [63.2, 2599.0], [63.3, 2599.0], [63.4, 2599.0], [63.5, 2599.0], [63.6, 2599.0], [63.7, 2600.0], [63.8, 2600.0], [63.9, 2600.0], [64.0, 2600.0], [64.1, 2600.0], [64.2, 2600.0], [64.3, 2600.0], [64.4, 2600.0], [64.5, 2600.0], [64.6, 2601.0], [64.7, 2601.0], [64.8, 2601.0], [64.9, 2601.0], [65.0, 2601.0], [65.1, 2601.0], [65.2, 2601.0], [65.3, 2601.0], [65.4, 2601.0], [65.5, 2602.0], [65.6, 2602.0], [65.7, 2602.0], [65.8, 2602.0], [65.9, 2602.0], [66.0, 2602.0], [66.1, 2602.0], [66.2, 2603.0], [66.3, 2603.0], [66.4, 2603.0], [66.5, 2603.0], [66.6, 2603.0], [66.7, 2603.0], [66.8, 2603.0], [66.9, 2603.0], [67.0, 2603.0], [67.1, 2603.0], [67.2, 2603.0], [67.3, 2603.0], [67.4, 2604.0], [67.5, 2604.0], [67.6, 2604.0], [67.7, 2605.0], [67.8, 2605.0], [67.9, 2605.0], [68.0, 2605.0], [68.1, 2606.0], [68.2, 2606.0], [68.3, 2606.0], [68.4, 2607.0], [68.5, 2611.0], [68.6, 2612.0], [68.7, 2633.0], [68.8, 2688.0], [68.9, 2690.0], [69.0, 2692.0], [69.1, 2692.0], [69.2, 2693.0], [69.3, 2693.0], [69.4, 2693.0], [69.5, 2694.0], [69.6, 2694.0], [69.7, 2694.0], [69.8, 2695.0], [69.9, 2695.0], [70.0, 2695.0], [70.1, 2695.0], [70.2, 2695.0], [70.3, 2695.0], [70.4, 2695.0], [70.5, 2696.0], [70.6, 2696.0], [70.7, 2696.0], [70.8, 2696.0], [70.9, 2696.0], [71.0, 2696.0], [71.1, 2697.0], [71.2, 2697.0], [71.3, 2697.0], [71.4, 2697.0], [71.5, 2697.0], [71.6, 2697.0], [71.7, 2697.0], [71.8, 2698.0], [71.9, 2698.0], [72.0, 2698.0], [72.1, 2698.0], [72.2, 2698.0], [72.3, 2698.0], [72.4, 2698.0], [72.5, 2698.0], [72.6, 2698.0], [72.7, 2699.0], [72.8, 2699.0], [72.9, 2699.0], [73.0, 2699.0], [73.1, 2699.0], [73.2, 2699.0], [73.3, 2699.0], [73.4, 2699.0], [73.5, 2699.0], [73.6, 2699.0], [73.7, 2699.0], [73.8, 2699.0], [73.9, 2699.0], [74.0, 2699.0], [74.1, 2699.0], [74.2, 2699.0], [74.3, 2699.0], [74.4, 2700.0], [74.5, 2700.0], [74.6, 2700.0], [74.7, 2700.0], [74.8, 2700.0], [74.9, 2700.0], [75.0, 2700.0], [75.1, 2700.0], [75.2, 2700.0], [75.3, 2700.0], [75.4, 2700.0], [75.5, 2700.0], [75.6, 2701.0], [75.7, 2701.0], [75.8, 2701.0], [75.9, 2701.0], [76.0, 2701.0], [76.1, 2701.0], [76.2, 2701.0], [76.3, 2701.0], [76.4, 2701.0], [76.5, 2701.0], [76.6, 2701.0], [76.7, 2702.0], [76.8, 2702.0], [76.9, 2702.0], [77.0, 2702.0], [77.1, 2702.0], [77.2, 2702.0], [77.3, 2702.0], [77.4, 2702.0], [77.5, 2702.0], [77.6, 2702.0], [77.7, 2702.0], [77.8, 2702.0], [77.9, 2703.0], [78.0, 2703.0], [78.1, 2703.0], [78.2, 2703.0], [78.3, 2703.0], [78.4, 2703.0], [78.5, 2703.0], [78.6, 2703.0], [78.7, 2703.0], [78.8, 2704.0], [78.9, 2704.0], [79.0, 2704.0], [79.1, 2704.0], [79.2, 2704.0], [79.3, 2704.0], [79.4, 2705.0], [79.5, 2705.0], [79.6, 2706.0], [79.7, 2706.0], [79.8, 2707.0], [79.9, 2707.0], [80.0, 2707.0], [80.1, 2708.0], [80.2, 2709.0], [80.3, 2711.0], [80.4, 2788.0], [80.5, 2788.0], [80.6, 2789.0], [80.7, 2789.0], [80.8, 2792.0], [80.9, 2792.0], [81.0, 2792.0], [81.1, 2793.0], [81.2, 2794.0], [81.3, 2794.0], [81.4, 2794.0], [81.5, 2794.0], [81.6, 2794.0], [81.7, 2795.0], [81.8, 2795.0], [81.9, 2795.0], [82.0, 2795.0], [82.1, 2795.0], [82.2, 2795.0], [82.3, 2795.0], [82.4, 2795.0], [82.5, 2795.0], [82.6, 2796.0], [82.7, 2796.0], [82.8, 2796.0], [82.9, 2796.0], [83.0, 2796.0], [83.1, 2796.0], [83.2, 2796.0], [83.3, 2797.0], [83.4, 2797.0], [83.5, 2797.0], [83.6, 2797.0], [83.7, 2798.0], [83.8, 2798.0], [83.9, 2798.0], [84.0, 2798.0], [84.1, 2798.0], [84.2, 2798.0], [84.3, 2798.0], [84.4, 2798.0], [84.5, 2798.0], [84.6, 2798.0], [84.7, 2799.0], [84.8, 2799.0], [84.9, 2799.0], [85.0, 2799.0], [85.1, 2799.0], [85.2, 2799.0], [85.3, 2799.0], [85.4, 2799.0], [85.5, 2799.0], [85.6, 2799.0], [85.7, 2800.0], [85.8, 2800.0], [85.9, 2800.0], [86.0, 2800.0], [86.1, 2800.0], [86.2, 2800.0], [86.3, 2800.0], [86.4, 2800.0], [86.5, 2800.0], [86.6, 2800.0], [86.7, 2800.0], [86.8, 2800.0], [86.9, 2800.0], [87.0, 2800.0], [87.1, 2801.0], [87.2, 2801.0], [87.3, 2801.0], [87.4, 2801.0], [87.5, 2801.0], [87.6, 2801.0], [87.7, 2801.0], [87.8, 2802.0], [87.9, 2802.0], [88.0, 2802.0], [88.1, 2802.0], [88.2, 2802.0], [88.3, 2802.0], [88.4, 2802.0], [88.5, 2802.0], [88.6, 2803.0], [88.7, 2803.0], [88.8, 2803.0], [88.9, 2803.0], [89.0, 2803.0], [89.1, 2803.0], [89.2, 2804.0], [89.3, 2804.0], [89.4, 2804.0], [89.5, 2805.0], [89.6, 2805.0], [89.7, 2805.0], [89.8, 2805.0], [89.9, 2805.0], [90.0, 2806.0], [90.1, 2806.0], [90.2, 2807.0], [90.3, 2809.0], [90.4, 2810.0], [90.5, 2829.0], [90.6, 2891.0], [90.7, 2891.0], [90.8, 2892.0], [90.9, 2892.0], [91.0, 2892.0], [91.1, 2893.0], [91.2, 2893.0], [91.3, 2893.0], [91.4, 2894.0], [91.5, 2894.0], [91.6, 2894.0], [91.7, 2894.0], [91.8, 2894.0], [91.9, 2895.0], [92.0, 2895.0], [92.1, 2895.0], [92.2, 2895.0], [92.3, 2895.0], [92.4, 2895.0], [92.5, 2896.0], [92.6, 2896.0], [92.7, 2896.0], [92.8, 2897.0], [92.9, 2897.0], [93.0, 2897.0], [93.1, 2897.0], [93.2, 2898.0], [93.3, 2898.0], [93.4, 2898.0], [93.5, 2898.0], [93.6, 2899.0], [93.7, 2899.0], [93.8, 2899.0], [93.9, 2900.0], [94.0, 2900.0], [94.1, 2900.0], [94.2, 2901.0], [94.3, 2901.0], [94.4, 2901.0], [94.5, 2901.0], [94.6, 2901.0], [94.7, 2901.0], [94.8, 2901.0], [94.9, 2902.0], [95.0, 2903.0], [95.1, 2903.0], [95.2, 2903.0], [95.3, 2904.0], [95.4, 2904.0], [95.5, 2904.0], [95.6, 2904.0], [95.7, 2904.0], [95.8, 2905.0], [95.9, 2906.0], [96.0, 2908.0], [96.1, 2990.0], [96.2, 2992.0], [96.3, 2993.0], [96.4, 2993.0], [96.5, 2993.0], [96.6, 2994.0], [96.7, 2994.0], [96.8, 2994.0], [96.9, 2995.0], [97.0, 2995.0], [97.1, 2996.0], [97.2, 2996.0], [97.3, 2996.0], [97.4, 2997.0], [97.5, 2997.0], [97.6, 2997.0], [97.7, 2998.0], [97.8, 2999.0], [97.9, 3000.0], [98.0, 3002.0], [98.1, 3002.0], [98.2, 3003.0], [98.3, 3003.0], [98.4, 3004.0], [98.5, 3005.0], [98.6, 3006.0], [98.7, 3089.0], [98.8, 3092.0], [98.9, 3094.0], [99.0, 3096.0], [99.1, 3097.0], [99.2, 3098.0], [99.3, 3098.0], [99.4, 3099.0], [99.5, 3102.0], [99.6, 3103.0], [99.7, 3193.0], [99.8, 3196.0], [99.9, 3199.0]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 156.0, "series": [{"data": [[0.0, 39.0], [600.0, 6.0], [700.0, 11.0], [800.0, 14.0], [900.0, 9.0], [1000.0, 29.0], [1100.0, 15.0], [1200.0, 18.0], [1300.0, 40.0], [1400.0, 41.0], [1500.0, 22.0], [100.0, 23.0], [1600.0, 34.0], [1700.0, 43.0], [1800.0, 49.0], [1900.0, 52.0], [2000.0, 34.0], [2100.0, 41.0], [2200.0, 29.0], [2300.0, 62.0], [2400.0, 104.0], [2500.0, 133.0], [2600.0, 147.0], [2700.0, 156.0], [2800.0, 113.0], [2900.0, 55.0], [3000.0, 21.0], [3100.0, 7.0], [200.0, 3.0], [3200.0, 1.0], [300.0, 3.0], [400.0, 19.0], [500.0, 4.0]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 87.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1101.0, "series": [{"data": [[0.0, 87.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 189.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1101.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 20.69536423841061, "minX": 1.55960496E12, "maxY": 48.99836867862968, "series": [{"data": [[1.55960502E12, 48.99836867862968], [1.55960496E12, 20.69536423841061]], "isOverall": false, "label": "Call isPrime\/ with 2147483647 TG", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960502E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 9.874999999999998, "minX": 1.0, "maxY": 3098.0, "series": [{"data": [[2.0, 9.874999999999998], [3.0, 729.625], [4.0, 380.875], [5.0, 404.625], [6.0, 407.125], [7.0, 659.0], [8.0, 532.7142857142858], [9.0, 519.5714285714286], [10.0, 132.88888888888889], [11.0, 834.75], [12.0, 2993.0], [13.0, 295.5], [14.0, 2844.5], [15.0, 954.8], [17.0, 2806.0], [18.0, 1821.0], [19.0, 1369.25], [20.0, 867.5], [21.0, 806.0], [22.0, 1843.0], [23.0, 1846.0], [24.0, 1694.6666666666665], [25.0, 1953.0], [26.0, 3098.0], [27.0, 1904.5], [28.0, 1182.25], [29.0, 1676.0], [30.0, 1221.2857142857142], [31.0, 1034.2], [32.0, 889.2857142857142], [33.0, 787.375], [34.0, 891.6], [35.0, 918.2], [36.0, 542.6666666666666], [37.0, 2952.5], [38.0, 1138.4], [39.0, 1369.25], [40.0, 845.0], [41.0, 1900.5], [42.0, 1598.3333333333335], [43.0, 1100.5], [44.0, 1693.1666666666667], [45.0, 2053.0], [46.0, 2149.5], [47.0, 1380.6666666666667], [48.0, 2175.0], [49.0, 1808.0], [50.0, 2326.402053036788], [1.0, 2794.0]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}, {"data": [[45.89469862018882, 2139.43500363108]], "isOverall": false, "label": "Call isPrime\/2147483647-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 344.78333333333336, "minX": 1.55960496E12, "maxY": 3534.9666666666667, "series": [{"data": [[1.55960502E12, 3534.9666666666667], [1.55960496E12, 435.3833333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55960502E12, 2799.366666666667], [1.55960496E12, 344.78333333333336]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960502E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 483.22516556291384, "minX": 1.55960496E12, "maxY": 2343.4216965742294, "series": [{"data": [[1.55960502E12, 2343.4216965742294], [1.55960496E12, 483.22516556291384]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960502E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 482.96026490066214, "minX": 1.55960496E12, "maxY": 2343.284665579121, "series": [{"data": [[1.55960502E12, 2343.284665579121], [1.55960496E12, 482.96026490066214]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960502E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.6615008156606849, "minX": 1.55960496E12, "maxY": 1.1523178807947019, "series": [{"data": [[1.55960502E12, 0.6615008156606849], [1.55960496E12, 1.1523178807947019]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960502E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.55960496E12, "maxY": 3298.0, "series": [{"data": [[1.55960502E12, 3298.0], [1.55960496E12, 1297.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55960502E12, 1003.0], [1.55960496E12, 2.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55960502E12, 2893.0], [1.55960496E12, 1032.8000000000004]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55960502E12, 3097.73], [1.55960496E12, 1295.96]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55960502E12, 2904.0], [1.55960496E12, 1123.0000000000002]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960502E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 42.0, "minX": 3.0, "maxY": 2895.5, "series": [{"data": [[35.0, 42.0], [34.0, 1050.0], [37.0, 1398.5], [40.0, 1999.5], [45.0, 1105.0], [48.0, 670.5], [3.0, 2800.0], [14.0, 843.0], [15.0, 2895.5], [16.0, 2701.5], [17.0, 2700.0], [18.0, 2602.0], [19.0, 2696.0], [20.0, 2355.0], [21.0, 2498.0], [23.0, 2497.0], [24.0, 2597.0], [26.0, 1498.0], [28.0, 2097.5], [30.0, 1905.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 48.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 42.0, "minX": 3.0, "maxY": 2895.0, "series": [{"data": [[35.0, 42.0], [34.0, 1050.0], [37.0, 1398.0], [40.0, 1999.5], [45.0, 1105.0], [48.0, 670.5], [3.0, 2800.0], [14.0, 842.5], [15.0, 2895.0], [16.0, 2701.5], [17.0, 2699.5], [18.0, 2601.5], [19.0, 2695.5], [20.0, 2354.5], [21.0, 2498.0], [23.0, 2497.0], [24.0, 2597.0], [26.0, 1498.0], [28.0, 2097.5], [30.0, 1905.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 48.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.283333333333333, "minX": 1.55960496E12, "maxY": 19.666666666666668, "series": [{"data": [[1.55960502E12, 19.666666666666668], [1.55960496E12, 3.283333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960502E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.5166666666666666, "minX": 1.55960496E12, "maxY": 20.433333333333334, "series": [{"data": [[1.55960502E12, 20.433333333333334], [1.55960496E12, 2.5166666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960502E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.5166666666666666, "minX": 1.55960496E12, "maxY": 20.433333333333334, "series": [{"data": [[1.55960502E12, 20.433333333333334], [1.55960496E12, 2.5166666666666666]], "isOverall": false, "label": "Call isPrime\/2147483647-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960502E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.5166666666666666, "minX": 1.55960496E12, "maxY": 20.433333333333334, "series": [{"data": [[1.55960502E12, 20.433333333333334], [1.55960496E12, 2.5166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960502E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}


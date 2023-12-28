<template>
  <section class="w-full bg-secondary">
    <div class="container py-14">
      <div class="w-full flex items-center justify-center flex-col gap-10">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 100,
            },
          }"
          class="text-2xl sm:text-3xl font-bold md:text-4xl md:leading-[150%] text-center"
        >
          Market sentiments, portfolio, and run <br class="hidden lg:block" />
          the infrastructure of your choice
        </h2>
        <div
          class="w-full flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12"
        >
          <div
            class="w-full lg:flex-1 flex flex-col items-start justify-start gap-6"
          >
            <h2
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 100,
                },
              }"
              class="text-2xl font-bold md:text-3xl md:leading-[150%]"
            >
              Invest Smart
            </h2>
            <p
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 100,
                },
              }"
              class="font-normal text-base text-textgray"
            >
              Get full statistic information about the behaviour of
              <br class="hidden lg:block" />
              buyers and sellers will help you to make the decision.
            </p>
            <button
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 50,
                },
              }"
              type="button"
              class="rounded-full w-fit px-8 py-4 outline-none flex items-center justify-center gap-4 border-2 border-primary text-white bg-primary text-sm sm:text-base font-medium capitalize hover:bg-primary/60 group transition-all duration-300"
            >
              Learn More
            </button>
          </div>
          <div
            class="w-full md:flex-1 relative flex flex-col items-center justify-center"
          >
            <div
              v-motion
              :initial="{ opacity: 0, scale: 0.5 }"
              :visible="{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 100,
                },
              }"
              class="w-full md:w-[500px] h-[298px] rounded-2xl bg-chartBgColor flex flex-col items-start justify-start gap-4 p-6"
            >
              <div class="w-full flex items-center justify-between gap-4">
                <div class="flex items-start justify-start gap-3">
                  <img
                    src="/img/coin1.svg"
                    alt="btcimage"
                    class="w-12 h-12 object-contain rounded-full"
                  />
                  <div class="flex flex-col items-start justify-start gap-1">
                    <h4
                      class="flex items-start justify-center gap-2 text-xl sm:text-2xl font-bold text-white"
                    >
                      <span>Bitcoin</span>
                      <span class="text-base font-semibold text-[#CFCFCF]"
                        >BTC</span
                      >
                    </h4>
                    <p class="text-[#f2f2f2bd] text-sm font-normal">
                      0.00080 BTC
                    </p>
                  </div>
                </div>
                <span class="text-sm font-medium text-[#42FFFF]">+125%</span>
              </div>
              <div class="w-full h-[80%]">
                <CanvasJSChart
                  :options="options"
                  :style="styleOptions"
                  @chart-ref="chartInstance"
                />
              </div>
            </div>
            <div
              v-motion
              :initial="{ opacity: 0, scale: 0.5 }"
              :visible="{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 150,
                },
              }"
              class="flex flex-col items-start justify-start gap-4 p-4 w-fit bg-[#491F98] backdrop-blur-[125px] rounded-2xl"
            >
              <h4
                class="text-lg font-semibold md:text-xl text-white max-w-[146px]"
              >
                Increase in Trade
              </h4>
              <h3
                class="flex items-center justify-start gap-4 text-xl font-bold md:text-2xl text-white"
              >
                <span>+75%</span>
                <i class="fa-solid fa-arrow-up text-[#FD8589] text-xl"></i>
              </h3>
              <RouterLink to="/" class="text-base font-normal text-[#F2F2F2]"
                >Sell option</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      chart: null,
      options: {
        animationEnabled: true,
        // exportEnabled: true,
        backgroundColor: "transparent",
        axisX: {
          title: "", // Empty title
          gridThickness: 0, // Hide grid lines
          tickLength: 0, // Hide tick marks
          lineColor: "#35068C", // Set the color for the Y-axis line
          tickColor: "#35068C", // Set the color for Y-axis ticks
          labelFormatter: function () {
            return ""; // Empty labels
          },
        },
        axisY: {
          title: "", // Empty title
          gridThickness: 0, // Hide grid lines
          tickLength: 0, // Hide tick marks
          lineColor: "#35068C", // Set the color for the Y-axis line
          tickColor: "#35068C", // Set the color for Y-axis ticks
          labelFormatter: function () {
            return ""; // Empty labels
          },
        },
        data: [
          {
            type: "spline", // Set type to 'spline' for a spline line
            yValueFormatString: "#,###.#%", // Format Y-axis labels as percentage
            color: "transparent",
            lineThickness: 0, // Set line thickness to 0 to hide the line
            markerSize: 0, // Set marker size to 0 to hide markers
            dataPoints: [
              { label: "Dec", y: 50 },
              { label: "Nov", y: 45 },
              { label: "Oct", y: 30 },
              { label: "Sep", y: 45 },
              { label: "Aug", y: 55 },
              { label: "Jul", y: 70 },
              { label: "Jun", y: 65 },
              { label: "May", y: 70 },
              { label: "Apr", y: 80 },
              { label: "Mar", y: 50 },
              { label: "Feb", y: 80 },
              { label: "Jan", y: 85 },
            ],
          },
          {
            type: "area", // Set type to 'area' for a filled area
            yValueFormatString: "#,###.#%", // Format Y-axis labels as percentage
            fillOpacity: 0.3, // Set the fill opacity for the area chart
            color: "#42FFFF", // Set the fill color for the area chart
            markerSize: 0, // Set marker size to 0 to hide markers
            dataPoints: [
              { label: "Dec", y: 50 },
              { label: "Nov", y: 45 },
              { label: "Oct", y: 30 },
              { label: "Sep", y: 45 },
              { label: "Aug", y: 55 },
              { label: "Jul", y: 70 },
              { label: "Jun", y: 65 },
              { label: "May", y: 70 },
              { label: "Apr", y: 80 },
              { label: "Mar", y: 50 },
              { label: "Feb", y: 80 },
              { label: "Jan", y: 85 },
            ],
          },
        ],
      },
      styleOptions: {
        width: "100%",
        height: "100%",
      },
    };
  },
  methods: {
    chartInstance(chart) {
      this.chart = chart;
    },
  },
};
</script>

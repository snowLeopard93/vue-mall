<template>
  <div ref="eventCalendarDom"></div>
</template>
<script>
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
export default {
  name: "EventCalendar",
  data() {
    return {};
  },
  mounted() {
    this.initCalendar();
  },
  methods: {
    initCalendar() {
      let calendar = new Calendar(this.$refs.eventCalendarDom, {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,listWeek"
        }
      });
      calendar.render();
    }
  }
};
</script>
<style>
.fc .fc-button-primary:focus {
  box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
}
.fc .fc-button-primary:not(:disabled):active:focus,
.fc .fc-button-primary:not(:disabled).fc-button-active:focus {
  box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
}
</style>

import {ref } from "vue";

export const useTimer = () => {
  const timer = ref(0);
  const isRunning = ref(false);
  const interval = ref<ReturnType<typeof setInterval> | null>(null);

  const stopTimer = () => {
    if (interval.value) {
      clearInterval(interval.value);
      interval.value = null;
    }
    isRunning.value = false;
  };

  const startTimer = (
    time: number,
    { onFinish }: { onFinish?: () => void } = {}
  ) => {
    if (time < 0) throw new Error("Time must be >= 0");

    if (isRunning.value || interval.value !== null) return;

    timer.value = time;

    isRunning.value = true;

    interval.value = setInterval(() => {
      if (timer.value <= 1) {
        clearInterval(interval.value!);
        interval.value = null;
        isRunning.value = false;
        timer.value = 0;
        onFinish?.();
      } else {
        timer.value--;
      }
    }, 1000);
  };

  return {
    timer,
    isRunning,
    startTimer,
    stopTimer,
  };
};

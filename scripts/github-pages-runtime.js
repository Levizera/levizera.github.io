(() => {
  const formatValue = (value, decimals) =>
    new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);

  const parseTarget = (label) => {
    const match = label.trim().match(/^(\+)?([\d.,]+)(.*)$/);
    if (!match) return null;

    const rawNumber = match[2];
    const decimals = rawNumber.includes(",")
      ? rawNumber.split(",")[1].length
      : 0;
    const value = Number(rawNumber.replaceAll(".", "").replace(",", "."));

    return {
      prefix: match[1] ?? "",
      value,
      suffix: match[3] ?? "",
      decimals,
    };
  };

  document.querySelectorAll(".animated-number").forEach((element) => {
    const target = parseTarget(element.getAttribute("aria-label") ?? "");
    if (!target) return;

    element.textContent = `${target.prefix}${formatValue(
      0,
      target.decimals,
    )}${target.suffix}`;

    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        observer.disconnect();

        window.setTimeout(() => {
          const start = performance.now();
          const duration = 1450;

          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current =
              progress === 1 ? target.value : target.value * eased;

            element.textContent = `${target.prefix}${formatValue(
              current,
              target.decimals,
            )}${target.suffix}`;

            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }, 280);
      },
      { threshold: 0.7, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(element);
  });
})();

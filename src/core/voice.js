/**
 * Выбирает голос синтеза речи.
 * Порядок: голос с точным именем → голос с тем же языком (en-US) → голос с тем же
 * основным языком (en-GB для en-US) → undefined (браузер возьмёт голос по умолчанию).
 * @param {Array<{ name: string, lang: string }>} voices
 * @param {{ voiceName?: string | null, lang: string }} preferences
 * @returns {{ name: string, lang: string } | undefined}
 */
export function selectVoice(voices, { voiceName, lang }) {
  if (voiceName) {
    const byName = voices.find((voice) => voice.name === voiceName);
    if (byName) return byName;
  }

  const normalize = (value) => value.toLowerCase().replace('_', '-');
  const wanted = normalize(lang);
  const wantedBase = wanted.split('-')[0];

  return (
    voices.find((voice) => normalize(voice.lang) === wanted) ??
    voices.find((voice) => normalize(voice.lang).split('-')[0] === wantedBase)
  );
}

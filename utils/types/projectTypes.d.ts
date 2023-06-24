export type Channel = Record<string, string>;

export type JokeType = "single" | "twopart";

export interface Joke {
  error: boolean;
  category: string;
  type: string;
  joke: string;
  setup: string;
  delivery: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  id: number;
  safe: boolean;
  lang: string;
}

export type singleJoke = Omit<Joke, "setup" | "delivery">;
export type twoPartJoke = Omit<Joke, "joke">;
export type response_type = "in_channel" | "ephemeral" | undefined;

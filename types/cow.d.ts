/**
 * Cow template
 */
declare module "*.cow" {
  /**
   * Cow name
   */
  export const name: string;

  /**
   * Default eyes when empty string is provided
   */
  export const eyes: string | undefined;

  /**
   * Default tongue when empty string is provied
   */
  export const tongue: string | undefined;

  /**
   * Renderer function
   *
   *
   * @callback CowRenderer
   * @param action Action
   * @param eyes Eyes
   * @param tongue Tongue
   * @returns Final cow
   */
  export const render: (action?: string, eyes?: string, tongue?: string) => string;
}

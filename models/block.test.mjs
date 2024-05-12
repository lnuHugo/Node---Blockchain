import { describe, it, expect, beforeEach } from "vitest";
import Block from "./Block.mjs";

describe("Block", () => {
  const timestamp = Date.now();
  const blockIndex = 1;
  const hash = "current-hash";
  const lastHash = "previous-hash";
  const data = "data";
  const nonce = 1;
  const difficulty = 2;

  const block = new Block(
    timestamp,
    blockIndex,
    hash,
    lastHash,
    data,
    nonce,
    difficulty
  );

  describe("Properties", () => {
    it("should have a timestamp property", () => {
      expect(block).toHaveProperty("timestamp");
    });

    it("should have a blockIndex property", () => {
      expect(block).toHaveProperty("blockIndex");
    });

    it("should have a hash property", () => {
      expect(block).toHaveProperty("currentBlockHash");
    });

    it("should have a lastHash property", () => {
      expect(block).toHaveProperty("previousBlockHash");
    });

    it("should have a data property", () => {
      expect(block).toHaveProperty("data");
    });

    it("should have a nonce property", () => {
      expect(block).toHaveProperty("nonce");
    });

    it("should have a nonce property", () => {
      expect(block).toHaveProperty("difficulty");
    });
  });

  describe("Property values", () => {
    it("should set a timestamp"),
      () => {
        expect(block.timestamp).toEqual(timestamp);
      };

    it("should set a blockIndex"),
      () => {
        expect(block.blockIndex).toEqual(blockIndex);
      };

    it("should set a hash"),
      () => {
        expect(block.hash).toEqual(hash);
      };

    it("should set a lastHash"),
      () => {
        expect(block.lastHash).toEqual(lastHash);
      };

    it("should set data"),
      () => {
        expect(block.data).toEqual(data);
      };

    it("should set a nonce"),
      () => {
        expect(block.nonce).toEqual(nonce);
      };

    it("should set a hash"),
      () => {
        expect(block.difficulty).toEqual(difficulty);
      };
  });

  it("should return an instance of Block class", () => {
    expect(block instanceof Block).toBe(true);
  });
});

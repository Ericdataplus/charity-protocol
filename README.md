# Charity Protocol 💚

### 🌐 **[View Concept Demo →](https://ericdataplus.github.io/charity-protocol/)**

> **Trust-Minimized Giving That Actually Helps People**

A radically transparent platform where contributors pool funds, vote on what to buy, and watch goods ship directly to verified charities. By focusing on trust-minimization rather than impossible "trustless" guarantees, we ensure maximum efficiency and accountability.

---

## 📋 Table of Contents

- [The Vision](#-the-vision)
- [Core Problems We Solve](#-core-problems-we-solve)
- [How It Works: The Confirmation-Gated Executor](#-how-it-works-the-confirmation-gated-executor)
- [Key Design Decisions](#-key-design-decisions)
- [The Trust Model](#-the-trust-model)
- [Governance Rules](#-governance-rules)
- [Legal Structure & Roadmap](#-legal-structure--roadmap)
- [Scope Limits (Phase 1 vs Phase 3)](#-scope-limits-phase-1-vs-phase-3)
- [Running the Mockup](#-running-the-mockup)

---

## 🎯 The Vision

Imagine a world where:

1. **You voluntarily contribute** to a shared charity pool running on **USDC on Base**.
2. **Everyone can see** exactly how much is in the pool (full transparency).
3. **The community votes** on what to buy (democratic allocation).
4. **Verified humans have equal say** (quadratic voting with Sybil resistance).
5. **Money ONLY goes to products** — never cash to anyone.
6. **Execution is transparent** — every tracking number and receipt is public.

This is **Charity Protocol**: not a company or an investment, but rather a blueprint combining existing pieces (crypto rails, identity verification, logistics) into a trust-minimized, radically transparent giving tool.

---

## 💭 The Philosophy

### Radical Transparency over "No Humans"

Early iterations aimed for a fully "trustless" protocol with zero human intervention. Real-world physical delivery makes this impossible. Instead, Charity Protocol embraces a **Confirmation-Gated Executor** model. 

We don't pretend humans aren't involved. We just make it impossible for them to act maliciously without immediate detection and consequences.

### This Is Not An Investment

Let's be absolutely clear:
- ❌ There is no token to buy.
- ❌ There is no price that goes up.
- ❌ You will not make money.

This is for people with kind hearts who want real change in the world. Your return is knowing you helped someone.

### Why No AI Governance?

We deliberately choose **not** to use AI as a governance mechanism or decision-maker. While AI can draft code and summarize data, human empathy, local context, and community consensus are strictly required to decide *who* gets help and *what* they need. The community votes; the protocol executes. No black boxes.

---

## 🔥 Core Problems We Solve

### Problem 1: Traditional Charity Waste
**Our Solution**: **Goods, not cash.** Instead of giving money to a charity, we:
- Maintain a **verified recipient registry** with a strict vetting process.
- Vote to buy **specific goods** (e.g., 200 winter coats) for those approved recipients.
- An executor orders directly from **Amazon/Walmart**.
- Ship directly to the **verified charity's address**.
- Track the package **publicly**.

**Result**: 98% of funds become tangible goods. 2% is reserved for operational costs (audits, legal, hosting).

### Problem 2: Plutocracy in Voting
**Our Solution**: **Identity-Verified Quadratic Voting.**
Formula: `Votes = √(Lifetime Contribution with 24-month decay)`

A billionaire can't buy control. By restricting voting to verified humans, we prevent Sybil attacks where one person creates many wallets. We utilize anti-Sybil protections like proof of humanity (e.g., Persona/WorldID) alongside social vouching to ensure every voter is a unique, living person.

---

## ⚙️ How It Works: The Confirmation-Gated Executor

We don't use "auto-execution" smart contracts to buy physical goods, because APIs can fail and physical delivery requires human verification. 

Instead, we use a **Bonded Executor Model**:

1. **Vote Passes**: Community approves a proposal for $3,000 of blankets for Shelter X.
2. **Executor Acts**: A bonded executor purchases the goods using a corporate account (e.g., Amazon Business).
3. **Proof Posted**: Executor posts the receipt and tracking number to the protocol.
4. **Delivery Confirmed**: Shelter X receives the goods and signs a cryptographic confirmation (or posts photo proof).
5. **Reimbursement**: Only AFTER confirmation does the smart contract release the $3,000 from the treasury to reimburse the executor.

If the executor fails, they lose their bond and are not reimbursed.

---

## 🔐 The Trust Model

**Trust-minimized, radically transparent execution.**

Here is what you MUST trust:
- ⚠️ **The Executor** (until confirmation-gated reimbursement is complete).
- ⚠️ **The Charity's honesty** (mitigated by photo proof & audits).
- ⚠️ **USDC stability** (Coinbase/Circle).
- ⚠️ **Third-party auditors**.

Here is what you DO NOT have to trust:
- ✅ **Founder's promises** (On-chain v2 utilizes a 3-of-5 multisig with a 48-hour timelock).
- ✅ **Hidden books** (The ledger is entirely public, down to the cent).

---

## 🗳️ Governance Rules

To ensure fair, deliberate decision-making, the protocol operates on strict parameters:

- **Voting Window**: 7 days.
- **Quorum**: 10% of active voting power.
- **Approval Threshold**: Simple majority (>50%).
- **Timelock**: 48-hour challenge period before execution.
- **Anti-Snipe Extension**: If the outcome flips in the final hours, voting extends automatically.
- **Spending Caps**: Tied to charity trust tiers (New = $5k max, Verified = $25k max).
- **Revocation**: Voting rights are revocable ONLY by a 75% supermajority governance vote for documented fraud.
- **Dead-man Wind-down**: If the protocol is dormant for 18 months, fallback charities receive remaining funds.

---

## 🏛️ Legal Structure & Roadmap

Charity Protocol is currently a **Concept Demo**. We are actively establishing the legal foundation required to handle real funds.

### Stage 0: Concept Demo (Current)
- Interactive frontend with simulated data.
- Gathering community interest and technical feedback.

### Stage 1: Entity Formation
- Establishing a Fiscal Sponsorship or an independent 501(c)(3).
- **Why?** Handling money for charity requires strict AML/KYC compliance. We must have a legal entity to prevent the protocol from being classified as an unlicensed money transmitter.
- Donations will only be tax-deductible once this entity is established.

### Stage 2: Closed Pilot
- Testing the Confirmation-Gated Executor model with 2-3 local charities.
- Manual verification and execution.

### Stage 3: Public Crypto Rollout
- Opening the treasury to public USDC contributions.
- Enforcing Quadratic Voting via decentralized identity.

### Stage 4: On-Chain v2 (DAO)
- Transitioning treasury control to a 3-of-5 multisig.
- Smart contracts govern the Executor reimbursement flow.

---

## 📦 Scope Limits (Phase 1 vs Phase 3)

### Phase 1: Physical Goods Only
To minimize fraud and regulatory risk, Charity Protocol v1 will ONLY fund physical goods shipped to verified US 501(c)(3 charities (e.g., Amazon Business, Chewy).

### Phase 3: Deferred Allocation Methods
The following methods are **deferred pending deep legal review** for AML and Prepaid Access regulations:
- 🎁 Digital Gift Cards
- 💊 Medical Bill Pay
- 🏠 Rent/Utility Payments

Direct payments to individuals or third-party billers introduce massive regulatory complexity. We will not touch these until Stage 4.

---

## 💻 Running the Mockup

To run the interactive concept demo locally:

1. Clone the repository.
2. Serve the directory using a local web server. For example, using Python:
   ```bash
   python -m http.server 3000
   ```
3. Open `http://localhost:3000` in your browser.

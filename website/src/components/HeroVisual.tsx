import { ArrowUpRight } from "lucide-react";
import { BrayzenMark, WeysabiMark } from "./Logo";

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__glow" />

      <div className="hero-visual__card">
        <div className="hero-visual__bar">
          <span className="hero-visual__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="mono hero-visual__bar-label">rds / portfolio</span>
          <span className="hero-visual__live">
            <span className="hero-visual__live-dot" />
            live
          </span>
        </div>

        <div className="hero-visual__row hero-visual__row--brayzen">
          <div className="hero-visual__row-icon">
            <BrayzenMark size={30} />
          </div>
          <div className="hero-visual__row-body">
            <div className="hero-visual__row-head">
              <span className="hero-visual__row-name">Brayzen</span>
              <span className="hero-visual__row-tag">Consumer finance</span>
            </div>
            <div className="hero-visual__row-meta">
              <span className="hero-visual__bar-mini hero-visual__bar-mini--lime" />
              AI personal finance · Lagos
            </div>
          </div>
          <ArrowUpRight className="hero-visual__row-arrow" size={16} />
        </div>

        <div className="hero-visual__row hero-visual__row--weysabi">
          <div className="hero-visual__row-icon hero-visual__row-icon--dark">
            <WeysabiMark size={30} />
          </div>
          <div className="hero-visual__row-body">
            <div className="hero-visual__row-head">
              <span className="hero-visual__row-name">Weysabi</span>
              <span className="hero-visual__row-tag hero-visual__row-tag--emerald">
                Developer AI
              </span>
            </div>
            <div className="hero-visual__row-meta">
              <span className="hero-visual__bar-mini hero-visual__bar-mini--emerald" />
              AI orchestration · open source
            </div>
          </div>
          <ArrowUpRight className="hero-visual__row-arrow" size={16} />
        </div>

        <div className="hero-visual__foot">
          <span className="mono">Made in Lagos, Nigeria</span>
          <span className="hero-visual__foot-badge">2 product companies</span>
        </div>
      </div>
    </div>
  );
}

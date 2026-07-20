import { useState } from "react";
import { Row, Col, Button, Form, Collapse } from "react-bootstrap";
import '../App.css';

export interface FilterState {
  minScore: number;
  hideIncomplete: boolean;
  requireAtmosphere: boolean;
  climateZone: "all" | "arctic" | "temperate" | "tropical";
}

interface PlanetFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

const initialFilters: FilterState = {
  minScore: 0.0,
  hideIncomplete: false,
  requireAtmosphere: false,
  climateZone: "all",
};

export default function PlanetFilters({ onFilterChange }: PlanetFiltersProps) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [open, setOpen] = useState(false);
  const [activeLifestyle, setActiveLifestyle] = useState<string | null>(null);

  const updateFilters = (
    newFilters: Partial<FilterState>,
    lifestyleKey: string | null = null,
  ) => {
    const updated = { ...filters, ...newFilters };
    setFilters(updated);
    setActiveLifestyle(lifestyleKey);
    onFilterChange(updated);
  };

  const applyLifestyle = (type: string) => {
    if (activeLifestyle === type) {
      updateFilters(initialFilters, null);
      return;
    }

    switch (type) {
      case "move-in-ready":
        updateFilters(
          {
            minScore: 0.75,
            hideIncomplete: true,
            requireAtmosphere: true,
            climateZone: "all",
          },
          "move-in-ready",
        );
        break;
      case "paradise":
        updateFilters(
          {
            minScore: 0.3,
            hideIncomplete: false,
            requireAtmosphere: true,
            climateZone: "tropical",
          },
          "paradise",
        );
        break;
       case "arctic":
        updateFilters(
          {
            minScore: 0.3,
            hideIncomplete: false,
            requireAtmosphere: true,
            climateZone: "arctic",
          },
          "arctic",
        );
        break;
      case "fixer":
        updateFilters(
          {
            minScore: 0.0,
            hideIncomplete: false,
            requireAtmosphere: false,
            climateZone: "all",
          },
          "fixer",
        );
        break;
      default:
        updateFilters(initialFilters, null);
    }
  };

  return (
    <div className="p-4 rounded-3 bg-gray-100 shadow-sm border mb-4" style={{ backgroundColor: "#a2b8d2"}}>
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2">
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <span className="fw-bold text-secondary text-uppercase small tracking-wider me-2" style={{ color: "black"}}>
            Browse Lifestyles:
          </span>
          <Button
            variant={
              activeLifestyle === "move-in-ready"
                ? "success"
                : "outline-success"
            }
            onClick={() => applyLifestyle("move-in-ready")}
            className="rounded-pill px-3 btn-sm fw-semibold text-dark"
            style={{ backgroundColor: "#beebc4"}}
          >
            Move-In Ready
          </Button>
          <Button
            variant={
              activeLifestyle === "paradise" ? "danger" : "outline-danger"
            }
            onClick={() => applyLifestyle("paradise")}
            className="rounded-pill px-3 btn-sm fw-semibold text-dark"
            style={{ backgroundColor: "#edd0cd"}}
          >
            Solar Paradise
          </Button>
          <Button
            variant={
              activeLifestyle === "arctic" ? "primary" : "outline-primary"
            }
            onClick={() => applyLifestyle("arctic")}
            className="rounded-pill px-3 btn-sm fw-semibold text-dark"
            style={{ backgroundColor: "#a4bbf1"}}
          >
            Arctic Wonderland
          </Button>
          <Button
            variant={
              activeLifestyle === "fixer" ? "warning" : "outline-warning"
            }
            onClick={() => applyLifestyle("fixer")}
            className="rounded-pill px-3 btn-sm fw-semibold text-dark"
            style={{ backgroundColor: "#efe1b7"}}
          >
            Fixer-Upper (As-Is)
          </Button>
        </div>

        <Button
          variant="link"
          onClick={() => setOpen(!open)}
          aria-controls="advanced-search-panel"
          aria-expanded={open}
          className="text-decoration-none text-muted fw-semibold p-0 small"
        >
          {open ? "Hide Advanced Options ▴" : "Configure Custom Amenities ▾"}
        </Button>
      </div>

      <Collapse in={open}>
        <div id="advanced-search-panel">
          <hr className="my-3 opacity-25" />
          <Row className="g-3">
            <Col xs={12} md={4}>
              <Form.Group>
                <Form.Label className="fw-semibold text-secondary small mb-1">
                  Minimum Neighborhood Grade:{" "}
                  <span className="text-dark">
                    {(filters.minScore * 100).toFixed(0)}% Match
                  </span>
                </Form.Label>
                <Form.Range
                  min="0"
                  max="1"
                  step="0.05"
                  value={filters.minScore}
                  onChange={(e) =>
                    updateFilters(
                      { minScore: parseFloat(e.target.value) },
                      null,
                    )
                  }
                />
              </Form.Group>
            </Col>

            <Col xs={12} sm={6} md={4}>
              <Form.Group>
                <Form.Label className="fw-semibold text-secondary small mb-1">
                  Climate Comfort Zone
                </Form.Label>
                <Form.Select
                  size="sm"
                  value={filters.climateZone}
                  onChange={(e) =>
                    updateFilters({ climateZone: e.target.value as any }, null)
                  }
                >
                  <option value="all">All Ecosystems</option>
                  <option value="temperate">
                    Temperate (Goldilocks Range)
                  </option>
                  <option value="tropical">Tropical (High Stellar Flux)</option>
                  <option value="arctic">Deep Freeze (Sub-Zero Winters)</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col
              xs={12}
              sm={6}
              md={4}
              className="d-flex flex-column justify-content-end gap-2 pb-1"
            >
              <Form.Check
                type="switch"
                id="atmosphere-switch"
                label="Air Conditioning (Retained Atmosphere)"
                className="small fw-semibold text-secondary"
                checked={filters.requireAtmosphere}
                onChange={(e) =>
                  updateFilters({ requireAtmosphere: e.target.checked }, null)
                }
              />
              <Form.Check
                type="switch"
                id="incomplete-switch"
                label="Verified Inspection Records Only"
                className="small fw-semibold text-secondary"
                checked={filters.hideIncomplete}
                onChange={(e) =>
                  updateFilters({ hideIncomplete: e.target.checked }, null)
                }
              />
            </Col>
          </Row>
        </div>
      </Collapse>
    </div>
  );
}
